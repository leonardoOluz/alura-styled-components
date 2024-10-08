import styled from "styled-components";
import Item from "./Item";
import { IUpdates } from "../../interfaces/IUpdates";
import { Icone } from "../../styles/GlobalStyles";

const ItemsStilizado = styled.div`   
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 10px;
  margin: 2px 0;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

interface ItemsProps {
  minhasLista: IUpdates
}

const Items = ({ minhasLista }: ItemsProps) => {
  return (<ItemsStilizado>
    <Icone src={`src/assets/images/${minhasLista.type}.svg`} alt={minhasLista.type}/>
    <Item {...minhasLista} />
    <span>{minhasLista.date}</span>
  </ItemsStilizado>)
}

export default Items;