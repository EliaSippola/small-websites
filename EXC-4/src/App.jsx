import { useState } from 'react';
import './App.css'
import styled, { ThemeProvider } from 'styled-components';
import Products from './components/Products';
import Contact from './components/Contact';
import Home from './components/Home';

const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#FF5722',
    background: '#F5F5F5',
    text: '#333333'
  },
  fonts: {
    main: 'Arial, sans-serif'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};

// Tyyli komponentit
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.main};
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const Header = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  height: calc(${(props) => props.theme.spacing.medium}*2 + 1.5rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: ${(props) => props.theme.spacing.small} 0;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.small};
    align-items: center;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: ${(props) => props.theme.spacing.small} 0;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


function App() {

  const [active, setActive] = useState('');

  const renderPage = () => {
    switch (active) {
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>Welcome to a website with a theme</Header>
        <NavBar>
          <NavLink onClick={() => setActive('')}>Home</NavLink>
          <NavLink onClick={() => setActive('products')}>Products</NavLink>
          <NavLink onClick={() => setActive('contact')}>Contact</NavLink>
        </NavBar>
        {renderPage()}
        <Footer>A Vite + React App</Footer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
