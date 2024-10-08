import { Box } from "../../styles/GlobalStyles";
import updates from "../../json/info.json"
import { IUpdates } from "../../interfaces/IUpdates";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {updates.updates.map((lista: IUpdates) => {
        return <Items key={lista.id} minhasLista={lista} />
      })}
    </Box>
  )
}

export default Extrato;