import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 24rem;

  background: rgba(250, 250, 250, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 0 0 4px 4px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap:1rem;
 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  a {
    padding: 0.25rem;
    border-radius: 6px;
    line-height: 0;
  }

  @media screen and (max-width:1920px){
    padding: 2rem 15rem;
  }

  @media screen and (max-width:1600px){
    padding: 2rem 10rem;
  }

  @media screen and (max-width:920px){
    padding: 2rem 6rem;
  }
  
  @media screen and (max-width:720px){
    padding: 2rem 4rem;
  }

  @media screen and (max-width:450px){
    padding: 2rem 1.5rem;
  }


  @media screen and (max-width: 400px){
    justify-content: center;
    gap:2rem;
  }
`;