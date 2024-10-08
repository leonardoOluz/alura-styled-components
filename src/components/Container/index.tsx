
import Conta from "../Conta";
import Extrato from "../Extrato";
import Titulo from "../Titulo";
import { ContainerStilizado, ConteudoEstilizado } from "./Styles";

const Container = () => {
  return (
    <ContainerStilizado>
      <Titulo>Olá Fulano!</Titulo>
      <ConteudoEstilizado>
        <Conta />
        <Extrato/>
      </ConteudoEstilizado>
    </ContainerStilizado>
  );
};

export default Container;
