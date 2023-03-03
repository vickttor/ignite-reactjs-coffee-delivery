import { MapPin, Money, Timer } from "phosphor-react";
import { BadgeIconContainer } from "../../components/BadgeIcon";
import { SuccessContainer } from "./style";
import DeliveryImage from "../../assets/delivery.svg";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";

export function Success(){

	const { userInformation } = useContext(CartContext);

	const paymentLabel = {
		"CREDIT": "Cartão de crédito",
		"DEBIT": "Cartão de débito",
		"MONEY": "Dinheiro",
	};

	return (
		<SuccessContainer>
			<div>
				<h1>Uhu! Pedido confirmado</h1>
				<h2>Agora é só aguardar que logo o café chegará até você</h2>
				<ul>
					<li>
						<BadgeIconContainer color="#8047F8">
							<MapPin size={16} color="#FFF" weight="fill"/>
						</BadgeIconContainer>
						<span>
							<p>Entre em <b>{userInformation.street}, {userInformation.number}</b></p>
							<p>{userInformation.district} - {userInformation.city}, {userInformation.state}</p>
						</span>
					</li>

					<li>
						<BadgeIconContainer color="#DBAC2C">
							<Timer size={16} color="#FFF" weight="fill" />
						</BadgeIconContainer>
						<span>
							<p>Previsão de entrega</p>
							<p><b>20 min - 30 min</b></p>
						</span>
					</li>

					<li>
						<BadgeIconContainer color="#C47F17">
							<Money size={16} color="#FFF" weight="fill"/>
						</BadgeIconContainer>
						<span>
							<p>Pagamento na entrega</p>
							<p><b>{paymentLabel[userInformation.payment]}</b></p>
						</span>
					</li>
				</ul>
			</div>

			<img src={DeliveryImage} alt="Image ilustrating the delivery" />
		</SuccessContainer>
	);
}