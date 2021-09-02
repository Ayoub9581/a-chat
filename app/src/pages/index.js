import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Layout from '@/components/layout/layout';

import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';

const Button = styled.button`
  border:none;
  outline:none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.main}
  /* Color the border and text with theme.main */
  ${'' /* color: ${props => props.theme.main}; */}
  border: 2px solid ${(props) => props.theme.colors.main};

`;
Button.defaultProps = {
  theme,
};

export default function Home() {
  return <Layout></Layout>;
}
