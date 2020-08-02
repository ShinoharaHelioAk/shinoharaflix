import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  
  /* const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição inicial',
    cor: '#000000',
  } */
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [values, setValues] = useState(valoresIniciais);
  
  //const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  // chave: pode ser nome, descricao, etc.
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    //console.log('[nomeDaCategoria]', nomeDaCategoria);
    //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
    //setNomeDaCategoria(infosDoEvento.target.value);
    //setValue('nome', infosDoEvento.target.value);
    
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
    
    //As duas linhas abaixo estão dando erro ao tentar digitar nos campos de texto, não entendi o porque.
    /*const {getAttribute, value} = infosDoEvento.target;
    setValue(getAttribute('name'), value);*/
    //As duas linhas abaixo resolveram o problema das duas linhas acima.
    /* const {name, value} = infosDoEvento.target;
    setValue(name, value); */
  }

  useEffect(() => {
    //console.log('alo alo w brasil');
    if (window.location.href.includes('localhost')) {
      const URL_TOP = 'http://localhost:8080/categorias';
      //fetch(URL_TOP);
      fetch(URL_TOP).then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias([...resposta,]);
      });

    }
    /* setTimeout(() => {
      setCategorias([
        // ...categorias, nomeDaCategoria
        ...categorias,
        //values
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria bacanudassa',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma categoria bacanudassa',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000) */;
  }, []
  );

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria: {nomeDaCategoria}</h1> */}
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        //console.log('Você tentou enviar o form né?');
        setCategorias([
          // ...categorias, nomeDaCategoria
          ...categorias, values
        ]);

        //setValues({});
        setValues(valoresIniciais);
      }}>
        {/* State */}
        {/*<div>
          <label>
            Nome da Categoria: 
            <input type="text"
            name="nome"
            // value={nomeDaCategoria}
            value={values.nome}
            // onChange={(infosDoEvento) => {
              //console.log('[nomeDaCategoria]', nomeDaCategoria);
              //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
              //setNomeDaCategoria(infosDoEvento.target.value);
              //setValue('nome', infosDoEvento.target.value);
              setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
            }} //
            onChange={handleChange}
            />
          </label>
        </div>*/}
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/*<div>
          <label>
            Descrição: 
            <textarea type="text"
            name="descricao"
            // value={nomeDaCategoria}
            value={values.descricao}
            // onChange={(infosDoEvento) => {
              //console.log('[nomeDaCategoria]', nomeDaCategoria);
              //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
              //setNomeDaCategoria(infosDoEvento.target.value);
              //setValue('descricao', infosDoEvento.target.value);
            //}}
            onChange={handleChange}
            />
          </label>
        </div>*/}


        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}        
        />
        {/*<div>
          <label>
            Cor: 
            <input type="color"
            name="cor"
            // value={nomeDaCategoria}
            value={values.cor}
            // onChange={(infosDoEvento) => {
              //console.log('[nomeDaCategoria]', nomeDaCategoria);
              //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
              //setNomeDaCategoria(infosDoEvento.target.value);
              //setValue('cor', infosDoEvento.target.value);
            //}}
            onChange={handleChange}
            />
          </label>
        </div>*/}
        {/* <button>
          Cadastrar
        </button> */}
        <Button>
          Cadastrar
        </Button>
      </form>

      {/* <div>Carregando...</div> */}
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {/* {categorias.map((categoria, indice) => {
          return (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
          )
        })} */}
        {categorias.map((categoria) => {
          // <li key={`${categoria.nome}`}>
          //   {categoria.nome}
          // </li>
          return (
          <li key={`${categoria.indice}`}>
          {categoria.nome}
        </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;