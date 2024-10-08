import bank_logo from "../../assets/images/bank_logo.svg";
import { BtnCabecalho, CabecalhoEstilizado, Logo } from "./Styles";

const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary={false} href="#">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho primary href="#">
          Sair
        </BtnCabecalho>
      </div>
    </CabecalhoEstilizado>
  );
};

export default Cabecalho;
