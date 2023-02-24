import { HomeIntroContainer, HomeIntroDescription } from "./style";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { BadgeIconContainer } from "../../components/BadgeIcon";

import * as tokens from "../../styles/tokens/variables";

import coffeIntroImg from "../../assets/coffee-intro.svg";

export function Home(){
	return(
		<HomeIntroContainer>
			<HomeIntroDescription>
				<h1>Encontre o café perfeito para qualquer  hora do dia</h1>
				<h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

				<ul>
					<li>
						<BadgeIconContainer color={tokens.SdBrandYellowDark}>
							<ShoppingCart size={16} weight="fill" color="#FFF"/>
						</BadgeIconContainer>
						<p>Compra simples e segura</p>
					</li>

					<li>
						<BadgeIconContainer color={tokens.SdBaseText}>
							<Package size={16} weight="fill" color="#FFF"/>
						</BadgeIconContainer>
						<p>Embalagem mantém o café intacto</p>
					</li>
				</ul>

				<ul>
					<li>
						<BadgeIconContainer color={tokens.SdBrandYellow}>
							<Timer size={16} weight="fill" color="#FFF"/>
						</BadgeIconContainer>
						<p>Entrega rápida e rastreada</p>
					</li>

					<li>
						<BadgeIconContainer color={tokens.SdBrandPurple}>
							<Coffee size={16} weight="fill" color="#FFF"/>
						</BadgeIconContainer>
						<p>O café chega fresquinho até você</p>
					</li>
				</ul>
			</HomeIntroDescription>
			
			<img src={coffeIntroImg} alt="Coffe Image ilustrating the of the the product options" />

		</HomeIntroContainer>
	);
}