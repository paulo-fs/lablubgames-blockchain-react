import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   padding: 2rem;

   backdrop-filter: blur(40px);
   border-radius: 10px;
   border: 2px solid ${({theme}) => theme.color.whiteT01};
   background-color: ${({theme}) => theme.color.whiteT02};

   transition: .2s;
   &:hover {
      background-color: ${({theme}) => theme.color.whiteT04};
   }
`;