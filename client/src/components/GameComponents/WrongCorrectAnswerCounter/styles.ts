import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   margin-top: 1.5rem;

   display: flex;
   justify-content: space-between;

   div{
      display: flex;
      align-items: flex-end;
      gap: 1rem;

      h4{
         opacity: .75;
      }

      span {
         padding-inline: .5rem;
         font-size: 1.2rem;
         border-bottom: 2px solid ${({theme}) => theme.color.whiteT02};
      }

      .correct{
         color: ${({theme}) => theme.color.blue};
      }

      .wrong{
         color: ${({theme}) => theme.color.red};
      }
   }
`;