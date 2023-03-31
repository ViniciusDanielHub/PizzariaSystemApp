import ApplicationNavigator from './navigators/Application';

import theme from './styles/theme'

import { ThemeProvider } from 'styled-components'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
     <ApplicationNavigator />
    </ThemeProvider>
  )
};

export default App;
