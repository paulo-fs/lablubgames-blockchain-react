import styled from "styled-components";

export const Container = styled.div`
   width: clamp(10rem, 20rem + 25vw, 50rem);
   padding: min(2rem, 1rem + 3vw);

   backdrop-filter: blur(150px);
   border-radius: 20px;
   border: 2px solid ${({theme}) => theme.color.whiteT01};

   display: flex;
   flex-direction: column;

   .question{
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 2rem;
   }

   button + button {
      margin-top: .5rem;
   }
`;