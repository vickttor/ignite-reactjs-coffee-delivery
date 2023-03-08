import { ICoffeeProduct } from "../../@types/Product";

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART  = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART",
  CHANGE_PRODUCT_ITEM_AMOUNT = "CHANGE_PRODUCT_ITEM_AMOUNT",
	CONFIRM_PURCHASE = "CONFIRM_PURCHASE"
}

export function addNewProductToCart(product: ICoffeeProduct) {
	return {
		type: CartActionTypes.ADD_PRODUCT_TO_CART,
		payload: {
			product,
		},
	};
}

export function removeProductFromCart(productID: string) {
	return {
		type: CartActionTypes.REMOVE_PRODUCT_TO_CART,
		payload: {
			productID
		}
	};
}

export function changeProductAmount(productID: string, amount: number) {
	return {
		type: CartActionTypes.CHANGE_PRODUCT_ITEM_AMOUNT,
		payload: {
			productID,
			amount
		}
	};
}

export function confirmPurchase() {
	return {
		type: CartActionTypes.CONFIRM_PURCHASE
	};
}