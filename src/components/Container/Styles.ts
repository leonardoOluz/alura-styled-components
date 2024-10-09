import styled from "styled-components";

export const ContainerStilizado = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const ConteudoEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
