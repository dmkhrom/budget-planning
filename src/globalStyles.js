import { createGlobalStyle } from 'styled-components';
import AvenirNextWoff from 'assets/fonts/AvenirNext-Regular.woff';
import AvenirNextWoff2 from 'assets/fonts/AvenirNext-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: url(${AvenirNextWoff}) format('woff'),
    url(${AvenirNextWoff2}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir Next', sans-serif;
    font-weight: 500;
  }
  h1, h2, h3, h4, h5, h6 {
  	margin: 0;
  	padding: 0;
  }
  input {
  	all: unset;
	}
`;

export default GlobalStyle;
