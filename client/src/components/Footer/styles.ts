import styled from "styled-components";

export const Container = styled.footer`
   width: 100%;
   backdrop-filter: blur(105px);
   border-top: 2px solid ${({theme}) => theme.color.whiteT01};
   
   div {
      padding: 1rem 4rem;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
   }
`;