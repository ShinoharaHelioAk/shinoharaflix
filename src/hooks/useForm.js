import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
  
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
  
    function clearForm() {
      setValues(valoresIniciais);
    }
  
    return {
      values, handleChange, clearForm,
    }
  }

  export default useForm;