import { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../Config/Colors'
export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background: ${primaryColor};
}

html, body, #root{
  height:100%;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul{
  list-style:none;
}
`;