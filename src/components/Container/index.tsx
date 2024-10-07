
import Conta from "../Conta";
import Titulo from "../Titulo";
import { ContainerStilizado, ConteudoEstilizado } from "./Styles";

const Container = () => {
  return (
    <ContainerStilizado>
      <Titulo>Olá Fulano!</Titulo>
      <ConteudoEstilizado>
        <Conta />
      </ConteudoEstilizado>
    </ContainerStilizado>
  );
};

export default Container;
