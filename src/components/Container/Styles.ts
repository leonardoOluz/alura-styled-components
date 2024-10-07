import styled from "styled-components";

export const ContainerStilizado = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

export const ConteudoEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`;