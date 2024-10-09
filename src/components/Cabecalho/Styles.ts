import styled from "styled-components";
import { colors } from "../../styles/themes";

export const CabecalhoEstilizado = styled.nav`
  background-color: ${colors.corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const BtnCabecalho = styled.a<{ primary: boolean }>`  
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${(props) => props.primary ? "transparent" : "white"};
  color: ${(props) => props.primary ? "white" : colors.corPrimaria };
`;