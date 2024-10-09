import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import GlobalStyles, { BtnTema } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { temaEscuro, temaClaro } from './styles/themes';
import SwitchTema from './components/SwitchTema';
import { useState } from 'react';

function App() {
  const [tema, setTema] = useState(true);
  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyles />
        <BtnTema 
        onClick={() => setTema(!tema)}
        >
          <SwitchTema
           tema={tema}
           />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App
