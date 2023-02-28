import styled from "styled-components";

export const CheckoutContainer = styled.form` 
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 8rem 0 4rem;
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
  
  h2 {
    ${({theme})=>({...theme.SdTitleTitleXs, lineHeight: `${theme.SdTitleTitleXs.lineHeight}px`})};
    color: ${({theme})=>theme.SdBaseSubtitle};
    border-bottom: 0.9375rem;
  }
`;

export const ConfirmProductSummary = styled.div`  
  background: ${({theme})=>theme.SdBaseCard};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
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
