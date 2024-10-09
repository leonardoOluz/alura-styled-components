import { IColors } from "../interfaces/IColors";
import { IThema } from "../interfaces/IThema";

export const colors: IColors = {
  corPrimaria: "#41d3be",
  /* ThemaClaro */
  fundoClaro: "#f1f1f1",
  conteudoClaro: "white",
  textoFundoClaro: "gray",
  /* ThemaEscuro */
  fundoEscuro: "#363537",
  conteudoEscuro: "#5c5b5e",
  textoFundoEscuro: "#FAFAFA",
};

export const temaClaro: IThema = {
  body: colors.fundoClaro,
  inside: colors.conteudoClaro,
  text: colors.textoFundoClaro,
  filter: "",
};

export const temaEscuro: IThema = {
  body: colors.fundoEscuro,
  inside: colors.conteudoEscuro,
  text: colors.textoFundoEscuro,
  filter: "invert(100%)",
};
