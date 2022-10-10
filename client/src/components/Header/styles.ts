import styled from "styled-components";

export const Container = styled.header`
   width:  100%;
   backdrop-filter: blur(105px);
   border-bottom: 2px solid ${({theme}) => theme.color.whiteT01};
   
   div{
      padding: 1rem 4rem;
      max-width: 1200px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;

      h4{
         color: ${({theme}) => theme.color.yellow};
      }

      p{
         font-weight: 800;
         opacity: .75;
         
         span{
            margin-left: 1rem;
            font-weight: 300;
            color: ${({theme}) => theme.color.yellow};
         }
      }
   }
`;