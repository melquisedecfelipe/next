import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('WorkSans'), local('WorkSans'),
        url('/fonts/WorkSans.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.familyWorkSans};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
