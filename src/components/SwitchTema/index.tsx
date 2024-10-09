import temaOn from "../../assets/images/themeOn.svg";
import temaOff from "../../assets/images/themeOff.svg";
import { Icone } from "../../styles/GlobalStyles";

const claro = <Icone src={temaOn} alt="Tema Claro" />
const escuro = <Icone src={temaOff} alt="Tema Escuro" />

interface PropsSwitchTema {
    tema: boolean
}
const SwitchTema = ({ tema }: PropsSwitchTema) => {
    return (
        <>
            {tema ? escuro : claro}
        </>
    )
}

export default SwitchTema;