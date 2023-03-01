import { motion } from "framer-motion";
import styled from "styled-components";

export const CheckoutContainer = styled.form` 
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 8rem 0 4rem;

  @media(max-width: 1200px){
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserInformationContainer = styled.section`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  justify-content: flex-start;
  gap: 0.75rem;

  max-width: 640px;

  @media(max-width: 1200px){
    max-width: 100%;
  }
  
  h2 {
    ${({theme})=>({...theme.SdTitleTitleXs, lineHeight: `${theme.SdTitleTitleXs.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseSubtitle};
    border-bottom: 0.9375rem;
  }

`;

const UserInformationBase = styled.div`
  background: ${({theme})=>theme.SdBaseCard};
  border-radius: 6px;
  padding: 2.5rem;

  h3 {
    ${({theme})=>({...theme.SdTextRegularM, lineHeight: `${theme.SdTextRegularM.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseSubtitle};
  }

  h4 {
    ${({theme})=>({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseText};
    margin-top: .125rem;
  }
`;

export const UserAddressContainer = styled(UserInformationBase)``;

export const PaymentContainer = styled(UserInformationBase)``;

export const SelectPaymentContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;

  label {
    width: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 6px;
    padding: 1rem;
    background: ${({theme})=>theme.SdBaseButton};

    cursor: pointer;
    ${({theme})=>({...theme.SdComponentsButtonS, lineHeight: `${theme.SdComponentsButtonS.lineHeight}px`})}
    text-transform: uppercase;
    color: ${({theme})=>theme.SdBaseText};

    border: 1px solid transparent;
  }

  input:checked + label {
    background: #EBE5F9;
    border-color: ${({theme})=>theme.SdBrandPurple};
  }

  input[type="radio"] {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: -999px;
  }
`;

export const FormPartsTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5rem;
`;

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;

interface InputContainerProps {
  direction?: "ROW" | "COL"
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({direction = "ROW"})=> direction === "ROW" ? "row" : "column"};
  align-items: ${({direction = "ROW"})=> direction === "ROW" ? "center" : "flex-start"};
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;


  input{
    flex:1;
    border: 1px solid ${({theme})=>theme.SdBaseButton};
    background: ${({theme})=>theme.SdBaseInput};
    padding: .75rem;
    border-radius: 4px;
    position: relative;

    ${({theme})=>({...theme.SdTextRegularS, lineHeight: `${theme.SdTextRegularS}px`})};
    color: ${({theme})=>theme.SdBaseText};

    &::placeholder{
      color: ${({theme})=>theme.SdBaseLabel};
    }
  }
    
`;

export const ProductsSummaryContainer = styled.section`  
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  justify-content: flex-start;
  gap: 0.75rem;

  max-width: 448px;

  @media(max-width: 1200px){
    max-width: 100%;
  }
  
  h2 {
    ${({theme})=>({...theme.SdTitleTitleXs, lineHeight: `${theme.SdTitleTitleXs.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseSubtitle};
    border-bottom: .9375rem;
  }
`;

export const ConfirmProductSummary = styled.div`  
  background: ${({theme})=>theme.SdBaseCard};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ConfirmProductSummaryOverflow = styled.div`
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

export const ProductItemContainer = styled.div`
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

export const ProductActionContainer = styled.div`
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

export const ProductItemAmountInputContainer = styled.div`

  position: relative;

  input[type="number"]{
    padding: 0.5rem 1rem;
    height: 100%;
    flex: 1;
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
  transition: color 0.3s ease;

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
  color: #FFF;
  width: 100%;
  border-radius: 6px;
  padding: .5rem .75rem;
`;



