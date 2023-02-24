import styled from "styled-components";

export const HomeIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  margin: 5.875rem 0 ;

  img {
    flex: 1;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }


  @media screen and (max-width: 1200px){
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 400px){
    margin-top: 3.75rem;
  }
`;

export const HomeIntroDescription = styled.div`
  flex:2;

  h1 {
    ${({theme})=>({...theme.SdTitleTitleXl, lineHeight: `${theme.SdTitleTitleXl.lineHeight}px`})}
    max-width:700px;
  }

  h2 {
    ${({theme})=>({...theme.SdTextRegularL, lineHeight: `${theme.SdTextRegularL.lineHeight}px`})}
    margin-top: 1rem;
  }

  ul {
    &:nth-child(3) {
      margin-top: 4.125rem;
    } 

    &:nth-child(4) {
      margin-top:1.25rem;
    } 

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:2.5rem;

    @media screen and (max-width: 1200px){
      flex-direction:column;
      align-items:flex-start;
      gap:1rem;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-start;
      gap: 0.75rem;

      p {
        color: ${({theme})=>theme.SdBaseText};
        ${({theme})=>({...theme.SdTextRegularM, lineHeight: `${theme.SdTextRegularM.lineHeight}px`})};
      }
    }
  }
`;



