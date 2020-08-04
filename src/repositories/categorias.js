//import { URL_BACKEND_TOP } from '../config';
import config from '../config';

// const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias/?_embed=videos`;

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;
//const URL_CATEGORIES = 'http://localhost:8080/categorias';

function getAllWithVideos() {
    // console.log(URL_BACKEND_TOP);
    //console.log(config.URL_BACKEND_TOP);

    /* fetch(URL_CATEGORIES).then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta,]);
    }); */
    
    return fetch(`${URL_CATEGORIES}/?_embed=videos`).then(async (respostaDoServidor) => {
        //console.log(respostaDoServidor, URL_CATEGORIES);
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possível pegar os dados :(');

        //setCategorias([...resposta,]);
    });

    // return URL_BACKEND_TOP;
    //return config.URL_BACKEND_TOP;
}

function getAll() {
    return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
    getAllWithVideos,
    getAll,
};