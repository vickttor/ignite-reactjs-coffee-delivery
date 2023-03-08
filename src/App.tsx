import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/Cart";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

import "react-toastify/dist/ReactToastify.css";

import * as tokens from "./styles/tokens/variables";

import "./lib/config/zod";

const queryClient = new QueryClient();

export function App() {

	return (
		<ThemeProvider theme={tokens}>
			<GlobalStyle/>

			<BrowserRouter>
				<CartContextProvider>
					<QueryClientProvider client={queryClient}>
						<Router/>
					</QueryClientProvider>
				</CartContextProvider>
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
