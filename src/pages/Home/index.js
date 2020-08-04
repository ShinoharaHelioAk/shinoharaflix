import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
//import './App.css';

//import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import Footer from '../../components/Footer';

// import URL_BACKEND_TOP from '../../config';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    //console.log(categoriasRepository.getAllWithVideos());
    categoriasRepository.getAllWithVideos().then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
    })
    /* .catch((err) => {
      console.log(err.message);
    })  */

    /* const URL_TOP = window.location.hostname.includes(
      'localhost') ?
      'http://localhost:8080/categorias' : 'https://shinoharaflix.herokuapp.com/categorias'; */
    //fetch(URL_TOP);
    // fetch(URL_BACKEND_TOP).then(async (respostaDoServidor) => {
        //const resposta = await respostaDoServidor.json();
        //setCategorias([...resposta,]);
    // });
  }, []);

  return (
    // <div style={{background: '#141414'}}>
    <PageDefault paddingAll={0}>
      {/* <Menu /> */}

      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Vídeo novo na Página"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      {/* {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            //videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
            videoDescription={'Vídeo novo no canal.'}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )} */}

      {/* {JSON.stringify(dadosIniciais)} */}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        //videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        videoDescription={'Vídeo novo no canal.'}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}

      {/*<Carousel
        category={dadosIniciais.categorias[5]}
      />*/}

      {/* <Footer /> */}
    {/* </div> */}
    </PageDefault>
    /*<div style={{background: '#141414'}}>
      <Menu />
      <h1>Hello World!!!</h1>
      <p>Isso é só o início!</p>
      <p>Update automágico (Hot reload não é hot roll)</p>
      <p>JSX -> [J]ava[S]cript [X]ML</p>
    </div>*/
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default Home;
