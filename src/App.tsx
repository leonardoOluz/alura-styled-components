import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App
