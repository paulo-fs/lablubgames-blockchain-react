import styled from "styled-components";

export const Btn = styled.button`
   padding: 1rem 3rem;

   border-radius: 10px;
   border: 2px solid ${({theme}) => theme.color.whiteT02};

   backdrop-filter: blur(40px);
   background-color: ${({theme}) => theme.color.whiteT01};

   transition: .2s;
   &:hover {
      background-color: ${({theme}) => theme.color.whiteT04};
   }

   &:disabled {
      opacity: .3;
      cursor: not-allowed;
   }
`;