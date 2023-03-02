import styled from "styled-components";

export const BadgeContainer = styled.span`
  ${({theme})=>({...theme.SdComponentsTag, lineHeight: `${theme.SdComponentsTag.lineHeight}px`})};
  width: auto;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  background-color: ${({theme})=>theme.SdBrandYellowLight};
  color: ${({theme})=>theme.SdBrandYellowDark};
`;