import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from '@/utils/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex
`;

const Layout = ({ notOnePageSection, children }) => {
  const changeVhVariable = () => {
    const vh = typeof window !== 'undefined' && window.innerHeight * 0.01;
    typeof document !== 'undefined' &&
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    changeVhVariable();
  }, []);

  return (
    <ThemeProvider theme={theme }>
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
