import styled from 'styled-components';
import { primaryColor } from '../../Config/Colors';


export const Nav = styled.nav`
background : ${primaryColor};
padding:20px;
display:flex;
align-items:center;
justify-content: center;
a{
  color:#fff;
  font-size:bold;
  }
`;