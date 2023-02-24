import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${({theme})=>theme.SdBrandYellow};
	}

	body {
		background: ${({theme})=>theme.SdBaseBackground};
		color: ${({theme})=>theme.SdBaseText};
		-webkit-font-smoothing: antialiased;
	}

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 600;
    color: ${({theme})=>theme.SdBaseTitle};
  }

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}

	button {
		border: none;
		outline: none;
		cursor: pointer;
		line-height: 0;

		&:disabled {
			cursor: not-allowed;
		}
	}

	*::-webkit-scrollbar {
		width: 1em;
	}
 
	*::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	
	*::-webkit-scrollbar-thumb {
		background-color: ${({theme})=>theme.SdBaseText};
	}
`;