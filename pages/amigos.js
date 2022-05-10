import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import IndexPage from '../src/components/IndexPage';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import ComunidadeGrid from "../src/components/ComunidadeGrid";

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt="Foto do usuário"
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${props.githubUser}`}
          title="Nome do usuário"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function menuAmigos(props) {
  // USUÁRIO GITHUB
  const githubUser = props.githubUser;
  // NUMEROS SEGUIDORES-SEGUINDO
  const [numerosSegui, setNumerosSegui] = React.useState([]);
  // SEGUIDORES
  const [seguidores, setSeguidores] = React.useState([]);
  // SEGUINDO
  const [seguindo, setSeguindo] = React.useState([]);

  React.useEffect(function () {
    const urlNumeros = `https://api.github.com/users/${githubUser}`;
    fetch(urlNumeros)
      .then((resposta) => resposta.json())
      .then((respostaJson) => setNumerosSegui(respostaJson));

    const urlFollowers = `https://api.github.com/users/${githubUser}/followers`;
    fetch(urlFollowers)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      });

    const urlFollowing = `https://api.github.com/users/${githubUser}/following`;
    fetch(urlFollowing)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguindo(respostaCompleta);
      });
  }, []);
  return (
    <>
      <IndexPage />
      <AlurakutMenu githubUser={githubUser} />
      <ComunidadeGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div style={{ gridArea: "comunidadeArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Seguidores ({seguidores.length})</h2>

            <ul>
              {seguidores.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a
                      href={itemAtual.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Site da comunidade"
                      style={{ height: "200px", width: "100%" }}
                    >
                      <img
                        src={itemAtual.avatar_url}
                        alt="Capa da comunidade"
                      />
                      <span style={{ fontSize: "16px" }}>
                        {itemAtual.login}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </ComunidadeGrid>
    </>
  );
}

export async function getServerSideProps(context) {
    const cookies = nookies.get(context);
    if (!cookies.USER_TOKEN) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    const token = cookies.USER_TOKEN;
    const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
        headers: {
            Authorization: token
        }
    })
        .then((resposta) => resposta.json())

    // if(!isAuthenticated) {
    //   return {
    //     redirect: {
    //       destination: '/login',
    //       permanent: false,
    //     }
    //   }
    // }

    const { githubUser } = jwt.decode(token);
    return {
      props: {
        githubUser,
      },
      //will be passed to the page component as props
    };
}