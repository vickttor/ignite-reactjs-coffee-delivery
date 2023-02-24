import { CoffeeCart } from "../CoffeCart";
import { HeaderContainer } from "./style";

export function Header() {
	return (
		<HeaderContainer>
			<img src="/logo.svg" alt="Coffe Delivery Logo - Purple Cappucino Cup with a Rocket draw in the center" />
			<CoffeeCart/>
		</HeaderContainer>
	);
}