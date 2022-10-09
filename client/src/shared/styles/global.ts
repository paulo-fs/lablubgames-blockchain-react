import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root{
      font-size: 15px;
   }

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
   }

   body{
      -webkit-font-smoothing: antialiased;
      width: 100vw;
      max-width: 1400px;
      height: auto;
      margin: 0 auto;
      overflow-x: hidden;
      overflow-y: auto;
      background: ${({theme}) => theme.color.background};
   }

   body, input, textarea, button, a {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: ${({theme}) => theme.color.white};
   }

   button {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }

   @media (max-width: 1024px){
      :root{
         font-size: 14px;
      }
   }
`;