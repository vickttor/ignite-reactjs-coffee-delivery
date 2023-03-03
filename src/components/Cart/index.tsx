import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import { Address, CartContainer, CoffeCartContainer } from "./style";

export function Cart() {

	const {products, userInformation} = useContext(CartContext);

	const productsAmount = products.length;

	const addressSummary = `${userInformation.city}, ${userInformation.state}`;

	return (
		<CoffeCartContainer>
			<Address>
				<MapPin size={22} weight="fill"/>
				<span>{addressSummary.length > 3 ? addressSummary : "Localidade"}</span>
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