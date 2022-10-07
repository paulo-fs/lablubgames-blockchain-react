import styled from "styled-components";

export const LayoutContainer = styled.div`
   width: 100vw;
   max-width: 1200px;
   height: 100vh;
   padding: 6rem 4rem;
   margin: 0 auto;

   z-index: 1;

   main{
      z-index: 1;
   }

   header {
      position: absolute;
      top: 0;
      left: 0;
   }

   footer {
      position: fixed;
      bottom: 0;
      left: 0;
   }
`;

export const Background = styled.img`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;

   z-index: -1;
`;