import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
      height: 100vh;
      margin: 0 auto;
      overflow-x: hidden;
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
         font-size: 15px;
      }
   }

   @media (max-width: 768px){
      :root{
         font-size: 14px;
      }
   }

   @media (max-width: 480px){
      :root{
         font-size: 13px;
      }
   }
`;