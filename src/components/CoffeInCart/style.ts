import styled from "styled-components";
import { motion } from "framer-motion";

export const CoffeInCartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }

  gap: 1.25rem;
  position: relative;
  padding-bottom: 2rem;

  &:not(:first-child) {
    padding-top: 2rem;
  }

  border-bottom: 1px solid ${({theme})=>theme.SdBaseButton};

  img {
    width: 100%;
    max-width: 64px;
    max-height: 64px;
  }

  & > div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    & > div:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      
      p {
        ${({theme})=>({...theme.SdTextRegularM, lineHeight: `${theme.SdTextRegularM}px`})};
        color: ${({theme})=>theme.SdBaseSubtitle};
        text-transform: capitalize;
      }

      span {
        ${({theme})=>({...theme.SdTextBoldM, lineHeight: `${theme.SdTextBoldM.lineHeight}px`})};
        color: ${({theme})=>theme.SdBaseText};
      }
    }
  }

  
`;

export const HandleCoffeInCartContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  flex-direction: row ;
  gap: 0.5rem;

  button.removeItem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;

    ${({theme})=>({...theme.SdComponentsButtonS, lineHeight: `${theme.SdComponentsButtonS.lineHeight}px`})};
    text-transform: uppercase;
    color: ${({theme})=>theme.SdBaseText};
    background-color: ${({theme})=>theme.SdBaseButton};
    border-radius: 6px;
    padding: .5rem;

    svg {
      color: ${({theme})=>theme.SdBrandPurple};
    }
  } 
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
  border-radius: 3px;

  height: 60%;
  line-height: 0;

  cursor:pointer;
  color: ${({theme})=>theme.SdBrandPurple};

  &:hover {
    color: ${({theme})=>theme.SdBrandPurpleDark};
  }

  font-weight: bold;
  position: absolute;

  padding: 0.25rem;
  font-size: 1.1rem;
  box-shadow: none;
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