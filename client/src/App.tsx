import {Layout} from 'components';
import { ContextProvider } from 'shared/context';
import { GlobalStyle } from 'shared/styles/global';
import { defaultTheme } from 'shared/styles/theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ContextProvider>
        <ThemeProvider theme={defaultTheme}>
            <Layout />
            <GlobalStyle />
        </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
