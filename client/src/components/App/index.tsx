// Themes
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles.styled';
import { theme } from '../../styles/theme';

// Components
import { EventForm } from '../';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EventForm />
    </ThemeProvider>
  );
};

export default App;
