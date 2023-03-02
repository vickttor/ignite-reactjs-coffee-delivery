import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import { Address, CartContainer, CoffeCartContainer } from "./style";

export function Cart() {

	const {products} = useContext(CartContext);

	const productsAmount = products.length;

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
				{productsAmount > 0 && <span>{productsAmount}</span>}
				<ShoppingCart size={22} weight="fill"/>
			</CartContainer>
		</CoffeCartContainer>
	);
}