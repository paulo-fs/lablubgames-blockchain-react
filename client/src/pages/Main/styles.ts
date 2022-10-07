import styled from "styled-components";

export const Container = styled.main`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;

   .header{
      width: clamp(10rem, 20rem + 25vw, 60rem);
      margin: 3rem;
      text-align: center;

      p{
         color: ${({theme}) => theme.color.whiteT06};
         font-size: 1.2rem;
      }

      h1 + p {
         margin-top: 1rem;
      }

   }
   
`;