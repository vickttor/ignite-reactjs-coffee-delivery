import styled from "styled-components";

export const SuccessContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.375rem;
  margin: 11.875rem 0 2rem;

  flex-wrap: wrap;

  & > div {
    flex: 1;

    h1 {
      ${({theme})=>({...theme.SdTitleTitleL, lineHeight: `${theme.SdTitleTitleL.lineHeight}px`})};
      color: ${({theme})=>theme.SdBrandYellowDark};
    }

    h2 {
      ${({theme})=>({...theme.SdTextRegularL, lineHeight: `${theme.SdTextRegularL.lineHeight}px`})};
      color: ${({theme})=>theme.SdBaseSubtitle};
      margin-top: 0.25rem;
    }

    ul {
      width: 100%;
      min-width: 400px;
      
      @media screen and (max-width: 500px){
        min-width: 280px;
      }

      margin-top: 2.5rem;
      padding: 2.5rem;
      border: 2px solid transparent;
      border-radius: 6px 36px 6px 36px;
      background: ${({theme})=>theme.SdBaseBackground};

      position: relative;
      background-clip: padding-box;

      &::before{
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px; /* !important */
        border-radius: inherit; /* !important */
        background: linear-gradient(to right, #DBAC2C, #8047F8);
      }


      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;

      li {
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem; 

        p {
          ${({theme})=>({...theme.SdTextRegularM, lineHeight: `${theme.SdTextRegularM.lineHeight}px`})};
          color: ${({theme})=>theme.SdBaseText};
        }
        
      }
    }
  }
  
  img {
    flex:1;
    width: 100%;
    max-width: 30.75rem;
    max-height: 18.3125rem;

    @media screen and (min-width: 1800px){
      max-width: 61.5rem;
      max-height: 36.625rem;
    }
  }
`;


