import { MapPin, ShoppingCart } from "phosphor-react";
import { Address, Cart, CoffeCartContainer } from "./style";

export function CoffeeCart() {

	return (
		<CoffeCartContainer>
			<Address>
				<MapPin size={22} weight="fill"/>
				<span>Porto Alegre, RS</span>
			</Address>

			<Cart 
				onClick={()=>{console.log("Shop Cart");}}
				whileHover={{scale:1.1}} 
				whileTap={{scale:1}}
			>
				<ShoppingCart size={22} weight="fill"/>
			</Cart>
		</CoffeCartContainer>
	);
}