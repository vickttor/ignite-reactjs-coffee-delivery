import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5rem;
`;

export const PaymentContainer = styled.div`
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

export const InputOptionsContainer = styled.div`
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
    transition: background 0.2s ease;
    cursor: pointer;

    ${({theme})=>({...theme.SdComponentsButtonS, lineHeight: `${theme.SdComponentsButtonS.lineHeight}px`})}
    
    text-transform: uppercase;
    color: ${({theme})=>theme.SdBaseText};

    &:hover {
      background: ${({theme})=>theme.SdBaseHover};
    }

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