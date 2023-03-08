import { motion } from "framer-motion";
import styled from "styled-components";

export const ConfirmProductContainer = styled.div`  
  background: ${({theme})=>theme.SdBaseCard};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ProductsOverflow = styled.div`
  width: 100%;
  max-height: 320px;
  overflow-y: auto;
  padding-right: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.2);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    opacity: 0;
    visibility: hidden;
  } 

  @media screen and (min-width: 400px) {
    height: auto;
  }
`;

export const PricessSumaryContainer = styled.div`
  width: 100%;
`;

export const PricesSummary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: .75rem;

  p {
    ${({theme})=>({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseText};
    margin: 0;
  }
`;

export const TotalPrice = styled(PricesSummary)`
  p {
    ${({theme})=>({...theme.SdTextBoldL, lineHeight: `${theme.SdTextBoldL.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseSubtitle};
  }
`;

export const ConfirmOrder = styled(motion.button)`
  ${({theme})=>({...theme.SdComponentsButtonG, lineHeight: `${theme.SdComponentsButtonG.lineHeight}px`})};
  background: ${({theme})=> theme.SdBrandYellow};
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme})=> theme.SdBrandYellowDark};
  }

  color: #FFF;
  width: 100%;
  border-radius: 6px;
  padding: .5rem .75rem;
`;

export const NoItemsContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  svg {
    color: ${({theme})=>theme.SdBaseText};
  }

  p {
    ${({theme})=>({...theme.SdTextRegularM, lineHeight: `${theme.SdTextRegularM.lineHeight}px`})};
    text-align: center;
    color: ${({theme})=>theme.SdBaseText};
  }

  border-bottom: 1px solid grey

`;