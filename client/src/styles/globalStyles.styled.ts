import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
  /* 1rem = 10px */
  font-size: 62.5%;
 }

 body {
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.15;
 }

 input button a select textarea option {
  font-family: 'Lato', sans-serif;
 }

 #root {
  height: 100%;
 }
`;
