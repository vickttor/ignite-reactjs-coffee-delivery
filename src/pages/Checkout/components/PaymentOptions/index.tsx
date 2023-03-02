import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { InputOptionsContainer, PaymentContainer, Title } from "./style";

import * as tokens from "../../../../styles/tokens/variables";

export function PaymentOptions() {
	return (
		<PaymentContainer>
			<Title>
				<CurrencyDollar size={22} color={tokens.SdBrandPurple}/>
				<div>
					<h3>Pagamento</h3>
					<h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
				</div>
			</Title>

			<InputOptionsContainer>
				<input type="radio" id="credit-card" name="payment"/>
				<label htmlFor="credit-card">
					<CreditCard size={16} color={tokens.SdBrandPurple} />
          Cartão de Crédito
				</label>

				<input type="radio" id="debit-card" name="payment"/>
				<label htmlFor="debit-card">
					<Money size={16} color={tokens.SdBrandPurple} />
        Cartão de Débito
				</label>

				<input type="radio" id="money" name="payment"/>
				<label htmlFor="money">
					<Bank size={16} color={tokens.SdBrandPurple} />
          Dinheiro
				</label>
			</InputOptionsContainer>
		</PaymentContainer>
	);
}