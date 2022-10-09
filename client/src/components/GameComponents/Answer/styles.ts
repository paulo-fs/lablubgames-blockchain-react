import styled from "styled-components";

interface ButtonProps {
   isSelected: boolean
}

export const Container = styled.button<ButtonProps>`
   width: 100%;
   padding: 1.2rem 2rem;

   backdrop-filter: blur(40px);
   border-radius: 10px;
   border: 2px solid ${({theme}) => theme.color.whiteT01};

   background-color: ${({theme, isSelected}) => isSelected
      ? theme.color.whiteT06
      : theme.color.whiteT02
   };

   color: ${({theme, isSelected}) => isSelected
      ? theme.color.backgroundLight
      : theme.color.white
   };

   transition: .2s;
   &:hover {
      background-color: ${({theme}) => theme.color.whiteT04};
   }
`;