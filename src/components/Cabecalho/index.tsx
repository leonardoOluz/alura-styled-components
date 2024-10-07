import bank_logo from "../../assets/images/bank_logo.svg";
import { BtnCabecalho, CabecalhoEstilizado, Logo } from "./Styles";

const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary={false} href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho primary href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </CabecalhoEstilizado>
  );
};

export default Cabecalho;
