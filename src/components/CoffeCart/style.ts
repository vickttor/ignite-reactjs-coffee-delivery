import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


export const CoffeCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  overflow: visible;
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

export const Cart = styled(motion(Link))`
  border-radius: 6px;
  padding: 0.5rem !important;
  background: ${({theme})=>theme.SdBrandYellowLight};
  text-decoration: none;
  cursor: pointer;
  line-height: 0;

  position: relative;

  span {
    ${({theme})=>({...theme.SdTextBoldS, lineHeight: `${theme.SdTextBoldS}px`})};
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: -25%;
    right: -25%;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme})=>theme.SdBrandYellowDark};
    color: ${({theme})=>theme.SdBaseWhite};
  }

  svg {
    color: ${({theme})=>theme.SdBrandYellowDark};

  }
`;