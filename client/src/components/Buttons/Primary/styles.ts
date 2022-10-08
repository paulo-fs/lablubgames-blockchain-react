import styled from "styled-components";

export const Btn = styled.button`
   padding: 1rem 3rem;

   border-radius: 10px;
   border: 2px solid ${({theme}) => theme.color.greenT02};
   
   backdrop-filter: blur(40px);
   background-color: ${({theme}) => theme.color.greenT04};

   transition: .2s;
   &:hover {
      background-color: ${({theme}) => theme.color.greenT08};
   }

   &:disabled {
      opacity: .3;
      cursor: not-allowed;
   }
`;