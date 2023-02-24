import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import * as tokens from "./styles/tokens/variables";

export function App() {
	return (
		<ThemeProvider theme={tokens}>
			<GlobalStyle/>

			<BrowserRouter>
				<Router/>
			</BrowserRouter>
			
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</ThemeProvider>
	);
}
