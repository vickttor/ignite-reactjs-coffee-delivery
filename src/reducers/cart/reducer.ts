/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { produce } from "immer";
import { Reducer } from "react";
import { ICoffeeProduct } from "../../@types/Product";
import { CartActionTypes } from "./actions";

export interface IProductsInCart {
  products: ICoffeeProduct[]
}

export const CartReducer: Reducer<IProductsInCart, any> = (state, action) => {
	switch (action.type) {
	case CartActionTypes.ADD_PRODUCT_TO_CART: {
		const product = action.payload.product;

		const {id: actualProductId, amount: productAmount} = product;

		const existingProductIndex = state.products.findIndex((product)=>product.id === actualProductId);

		if(existingProductIndex < 0) {
			return produce(state, (draft)=> {
				draft.products.push(product);
			});
		}
   
		return produce(state, (draft)=> {
			draft.products[existingProductIndex].amount += productAmount;
		});
	}
	case CartActionTypes.REMOVE_PRODUCT_TO_CART: {
		return state;
	}
	case CartActionTypes.CHANGE_PRODUCT_ITEM_AMOUNT: {
		return state;
	}
	default:
		return state;
	}
};