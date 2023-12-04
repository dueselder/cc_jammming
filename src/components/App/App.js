import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; 
import Container from '@mui/material/Container';
import Header from '../Header/Header';

// Custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ed2939',
    },
    secondary: {
      main: '#bfc0c0', 
    },
    background: {
      default: '#12191e', 
      paper: '#2a3439', 
    },
    text: {
      primary: '#e5e5e5', 
      secondary: '#6b554b', 
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: '2rem', 
    },
    // Add other typography styles as needed
  },
  components: {
    // Customizing specific components (example with Button)
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Example style override
          // Add other overrides as needed
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Jammming" backgroundColor="rgba(0, 0, 0, 0.8)" />
      <Container maxWidth="lg" sx={{ padding: '24px', marginTop: '16px', backgroundColor: 'transparent' }}>
        
        <SearchBar />
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} md={6}>
            <SearchResults />
          </Grid>
          <Grid item xs={12} md={6}>
            <Playlist />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;