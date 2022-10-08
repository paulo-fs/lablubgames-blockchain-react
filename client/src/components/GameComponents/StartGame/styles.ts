import styled from "styled-components";

export const Container = styled.div`
   width: clamp(10rem, 20rem + 25vw, 60rem);
   padding: min(4rem, 1rem + 3vw);

   backdrop-filter: blur(150px);
   border-radius: 20px;
   border: 2px solid ${({theme}) => theme.color.whiteT01};

   display: flex;
   flex-direction: column;
   gap: 2rem;

   text-align: center;

   p{
      font-size: 1.2rem;
      span{
         color: ${({theme}) => theme.color.green};
      }

      .gameOver{
         color: ${({theme}) => theme.color.red};
      }
   }
`;