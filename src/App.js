import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import Router from './routes';


const theme = {
  // ===== Colors ===== //
  darkBlue: 'rgb(11, 13, 23)',
  grayish: 'rgb(208, 214, 249)',
  white: 'rgb(255, 255, 255)',

  // ===== Typography ===== //
  fontPrimary: 'Bellefair',
  fontSecondary: 'Barlow Condensed',
  fontText: 'Barlow',
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
