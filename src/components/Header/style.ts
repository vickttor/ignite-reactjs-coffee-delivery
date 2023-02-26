import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  background: ${({theme})=>theme.SdBaseBackground};
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap:1rem;
 
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;

  @media screen and (max-width: 400px){
    justify-content: center;
    gap:2rem;
    position: relative;
  }
`;