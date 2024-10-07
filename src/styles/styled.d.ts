import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      corPrimaria: string;
      fundoClaro: string;
      textoFundoClaro: string;
    };
  }
}
