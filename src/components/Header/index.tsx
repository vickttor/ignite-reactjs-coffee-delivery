import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { HeaderContainer } from "./style";

export function Header() {
	return (
		<HeaderContainer>
			<Link to="/">
				<img src="/assets/logo.svg" alt="Coffe Delivery Logo - Purple Cappucino Cup with a Rocket draw in the center" />
			</Link>
			<Cart/>
		</HeaderContainer>
	);
}