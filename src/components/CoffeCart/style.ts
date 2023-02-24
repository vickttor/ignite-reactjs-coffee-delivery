import styled from "styled-components";
import { motion } from "framer-motion";

export const CoffeCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;

  gap: 0.75rem;

`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${({theme})=>theme.SdBrandPurpleLight};
  border-radius: 8px;
  padding: 0.5rem;
  
  span {
    color: ${({theme})=>theme.SdBrandPurpleDark};
  }

  svg {
    color: ${({theme})=>theme.SdBrandPurple}
  }

  ${({theme}) => ({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS.lineHeight}px`})};
`;

export const Cart = styled(motion.button)`
  border-radius: 6px;
  padding: 0.5rem;
  background: ${({theme})=>theme.SdBrandYellowLight};

  svg {
    color: ${({theme})=>theme.SdBrandYellowDark};

  }
`;