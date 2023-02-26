import styled from "styled-components";
import { motion } from "framer-motion";

export const CoffeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({theme})=>theme.SdBaseCard};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  position: relative;

  img {
    position: absolute;
    top: -20px;
    width: 100%;
    max-width: 7.5rem;
  }

  h3 {
    ${({theme})=>({...theme.SdTitleTitleS, lineHeight: `${theme.SdTitleTitleS.lineHeight}px`})}
    color: ${({theme})=>theme.SdBaseSubtitle};
    margin-top: 16px;
  }


  p {
    ${({theme})=>({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS.lineHeight}px`})}
    color:${({theme})=>theme.SdBaseLabel};
    margin-top: 8px;
    text-align:center;
  }
`;

export const CoffeCardBadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: calc(7.5rem - 2.5rem + 12px );
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CoffeCardBuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap:1.4375rem;
  margin-top: 2.0625rem;

  span {
    flex: 1;
    ${({theme})=>({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseText};

    span {
      ${({theme})=>({...theme.SdTitleTitleM, lineHeight: `${theme.SdTitleTitleM.lineHeight}px`})};
    }
  }

`;

export const AddToCartContainer = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

 

`;

export const InputContainer = styled.div`

  position: relative;

  input[type="number"]{
    width:72px;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${({theme})=>theme.SdBaseButton};
    text-align: center;
    ${({theme})=>({...theme.SdTextRegularM, lineHeight:`${theme.SdTextRegularM.lineHeight}px`})}
    color: ${({theme})=>theme.SdBaseTitle};

    /* Hide Arrows in Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Hide arrows in Firefox */
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

const BaseButton = styled(motion.button)`
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 6px;

  height: 100%;

  cursor:pointer;
  color: ${({theme})=>theme.SdBrandPurpleDark};

  position: absolute;

  padding: 0.25rem;
  font-size: 1.1rem;
`;

export const DecreaseButton = styled(BaseButton)`
  top: 50%;
  transform: translateY(-50%);
  left: 3px;
`;

export const IncreaseButton = styled(BaseButton)`
  top: 50%;
  transform: translateY(-50%);
  right: 3px;
`;


export const Cart = styled(motion.button)`
  border-radius: 6px;
  padding: 0.5rem;
  background: ${({theme})=>theme.SdBrandPurpleDark};

  svg {
    color: ${({theme})=>theme.SdBaseCard};
  }
`;


