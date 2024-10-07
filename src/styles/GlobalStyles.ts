import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: grey;
}
`;

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;


export default GlobalStyles;
