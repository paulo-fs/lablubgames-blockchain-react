import styled from "styled-components";

export const Container = styled.div`
   width: clamp(10rem, 20rem + 25vw, 50rem);
   margin: 1.5rem;

   display: flex;
   justify-content: space-between;
   gap: 2rem;
`;

export const BalanceBox = styled.div`
   width: 45%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .balance{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .5rem;
   }

   h2 {
      font-size: 1.3rem;
      opacity: 0.5;
   }

   span{
      padding: .5rem 1rem;
      font-size: 1.3rem;
      color: ${({theme}) => theme.color.blue};

      border-bottom: 2px solid ${({theme}) => theme.color.whiteT02};
   }
`;