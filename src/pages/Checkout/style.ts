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


