import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
    html, body {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.primary.leagueSpartan};
    background-color:${({ theme }) =>
      theme.colors.secondary.lightGrayishCyanBackground};
    margin: 0 auto;

    }

    #__next {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 1140px;
      margin: 0 auto;
    }

    #__next main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }

    input {
        all: unset;
    }

    button {
        cursor: pointer
    }
    img{
      display: inline-block;
      max-width:100%;
      margin:0;
    }
`;
