import styled from "styled-components";

export const Container = styled.div`
   width: auto;
   margin: 3rem;

   display: flex;
   flex-direction: column;
   gap: 1rem;

   .balance{
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 1rem;
   }

   h2 {
      opacity: 0.5;
   }

   span{
      padding-inline: 1rem;
      font-size: 1.3rem;
      color: ${({theme}) => theme.color.blue};

      border-bottom: 2px solid ${({theme}) => theme.color.whiteT02};
   }
`;