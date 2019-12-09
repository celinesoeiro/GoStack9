import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,body,#root{
    min-height:100%;
  }
  body{
    background: #7159c1;
    -webkit-font-feature-settings: antialiased !important;
  }
  body,input,button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button{
    cursor: pointer;
  }
`;

// O border box faz com que o tamanho máximo não seja modificado pelas alterações futuras.
// Exemplo: se um componente tiver 250px e for adicionado um padding de 10px ele não passa a ter 260px, fica com 250px.
