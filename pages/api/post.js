import { SiteClient } from 'datocms-client';

export default async function recebedorDaRequestsPost(request, response) {

    if (request.method === 'POST') {
        const TOKEN = "072a2e1106f04e97b3418da1419fcb";
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
          itemType: "1993024", // model ID criado pelo Dato
          ...request.body,
        });

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}