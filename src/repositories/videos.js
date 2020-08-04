import config from '../config';

// const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;
const URL_VIDEOS = 'http://localhost:8080/videos';
console.log('config.URL_BACKEND_TOP', config.URL_BACKEND_TOP);
console.log('URL_VIDEOS=', URL_VIDEOS);

function create(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}/?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application-json',
        },
        body: JSON.stringify(objetoDoVideo),
    }).then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
    create,
};