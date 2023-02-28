import { Link } from "react-router-dom";
import { CoffeeCart } from "../CoffeCart";
import { HeaderContainer } from "./style";

export function Header() {
	return (
		<HeaderContainer>
			<Link to="/">
				<img src="/logo.svg" alt="Coffe Delivery Logo - Purple Cappucino Cup with a Rocket draw in the center" />
			</Link>
			<CoffeeCart/>
		</HeaderContainer>
	);
}