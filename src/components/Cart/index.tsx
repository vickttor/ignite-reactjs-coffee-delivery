import { MapPin, ShoppingCart } from "phosphor-react";
import { Address, CartContainer, CoffeCartContainer } from "./style";

export function Cart() {

	const itemAmount = 0;

	return (
		<CoffeCartContainer>
			<Address>
				<MapPin size={22} weight="fill"/>
				<span>Porto Alegre, RS</span>
			</Address>

			<CartContainer 
				to="/checkout"
				whileHover={{scale:1.1}} 
				whileTap={{scale:1}}
			>
				{itemAmount > 0 && <span>{itemAmount}</span>}
				<ShoppingCart size={22} weight="fill"/>
			</CartContainer>
		</CoffeCartContainer>
	);
}