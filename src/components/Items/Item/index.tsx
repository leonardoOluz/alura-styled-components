import styled from "styled-components";
import { IUpdates } from "../../../interfaces/IUpdates";

const ItemEstilizado = styled.div`
  display: flex ;
  flex-direction: column;
  .texto {
    font-weight: bold;
  }
`;

const Item = ({ from, type, value }: IUpdates) => {
  return (<ItemEstilizado>
    <span className="texto">{type}</span>
    <span>{from}</span>
    <span>{value}</span>
  </ItemEstilizado>)
};

export default Item;
