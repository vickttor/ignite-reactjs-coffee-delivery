import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5rem;
`;

export const UserAddressContainer = styled.div`
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