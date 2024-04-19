import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }
   
    input, button {
      font-family: 'Space Mono', monospace;
    }
    ${({ theme }) => css`
      body {
        background: ${theme.colors.background};
        font-family: 'Space Mono', monospace;
      }
    `}
    
  `;
export default GlobalStyles;
