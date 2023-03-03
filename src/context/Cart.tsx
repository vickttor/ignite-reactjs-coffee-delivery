/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ICoffeeProduct } from "../@types/Product";
import { UserInformationType, Payment } from "../entities/userInformation/schema";
import { addNewProductToCart, removeProductFromCart, changeProductAmount } from "../reducers/cart/actions";
import { CartReducer, IProductsInCart } from "../reducers/cart/reducer";

interface ICartContext {
  products: ICoffeeProduct[];
	userInformation: UserInformationType;
	handleAddProductToCart: (product: ICoffeeProduct) => void;
	handleRemoveProductToCart: (productID: string) => void;
	handleChangeProductItemAmount: (productID: string, number: number) => void;
	handleGetTotalPrice: () => number;
	handleSetUserInformation: (newUserData: UserInformationType) => void;
	freight: number;
}

export const CartContext = createContext({} as ICartContext);

interface ICartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
	const [cartState, dispatch] = useReducer(
		CartReducer,
    { products: [] } as IProductsInCart,
    (initialState) => {
    	const storedStateAsJSON = localStorage.getItem("@ignite-timer:products-state-1.0.0");
    	if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
    	return initialState;
    }
	);

	const [userInformation, setUserInformation] = useState({
		cep: "",
		city: "", 
		complement: "", 
		district: "", 
		number: 0, 
		state: "", 
		street: "",
		payment: Payment.CREDIT
	} as UserInformationType);

	const freight = 3.30;

	const { products } = cartState;

	useEffect(() => {
		const stateJSON = JSON.stringify(cartState);

		localStorage.setItem("@ignite-timer:products-state-1.0.0", stateJSON);
	}, [cartState]);

	function handleAddProductToCart(product: ICoffeeProduct) {
		dispatch(addNewProductToCart(product));
	}

	function handleGetTotalPrice() {
		return products.reduce((acc, att) => acc + (att.price * att.amount) + freight, 0);
	}
	
	function handleRemoveProductToCart(productID: string) {
		dispatch(removeProductFromCart(productID));
	}

	function handleChangeProductItemAmount(productID: string, amount: number) {
		if(amount > 0) {
			dispatch(changeProductAmount(productID, amount));
		}
	}

	function handleSetUserInformation(newUserData: UserInformationType) {
		setUserInformation(newUserData);
	}


	return (
		<CartContext.Provider
			value={{
				products,
				userInformation,
				handleAddProductToCart,
				handleRemoveProductToCart,
				handleChangeProductItemAmount,
				handleGetTotalPrice,
				handleSetUserInformation,
				freight,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
