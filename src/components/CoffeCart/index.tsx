import { MapPin, ShoppingCart } from "phosphor-react";
import { Address, Cart, CoffeCartContainer } from "./style";

export function CoffeeCart() {
	return (
		<CoffeCartContainer>
			<Address>
				<MapPin size={22} weight="fill"/>
				<span>Porto Alegre, RS</span>
			</Address>

			<Cart onClick={()=>{console.log("Shop Cart");}}>
				<ShoppingCart size={22} weight="fill"/>
			</Cart>
		</CoffeCartContainer>
	);
}