import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { 
	FormPartsTitle, 
	AddressInputs, 
	CheckoutContainer, 
	InputContainer, 
	ProductsSummaryContainer, 
	UserAddressContainer, 
	UserInformationContainer,
	PaymentContainer,
	SelectPaymentContainer,
	ConfirmProductSummary
} from "./style";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "react-toastify";

import * as tokens from "../../styles/tokens/variables";

const AddressSchema = z.object({
	cep: z.string().min(8).max(8),
	street: z.string().min(3).max(100),
	number: z.number(),
	complement: z.string().max(100).optional(),
	district: z.string().min(3).max(100),
	city: z.string().min(3).max(100),
	state: z.string().min(3).max(100)
});

type AddressType = z.infer<typeof AddressSchema>;

export function Checkout(){

	const {register, handleSubmit, formState: {errors}} = useForm<AddressType>({
		resolver: zodResolver(AddressSchema)
	});

	useEffect(()=> {
		const keyErrors = Object.keys(errors);

		if(keyErrors.length > 0) {
			keyErrors.forEach((key)=> {
				toast.error(errors?.[key as keyof typeof errors]?.message);
			});
		}
	},[errors]);

	const handleAddressSubmit = async (data: AddressType) => {
		console.log(data);
	};

	return(
		<CheckoutContainer onSubmit={handleSubmit(handleAddressSubmit)}>
			<UserInformationContainer>
				<h2>Complete seu pedido</h2>

				<UserAddressContainer>
					<FormPartsTitle>
						<MapPinLine size={22} color={tokens.SdBrandYellowDark}/>
						<div>
							<h3>Endereço de Entrega</h3>
							<h4>Informe o endereço onde deseja receber seu pedido</h4>
						</div>
					</FormPartsTitle>

					<AddressInputs>
						<InputContainer>
							<input style={{maxWidth:"min(200px, 100%)"}} {...register("cep")} type="text" placeholder="CEP"/>
						</InputContainer>

						<InputContainer>
							<input {...register("street")} type="text" placeholder="Rua"/>
						</InputContainer>

						<InputContainer>
							<input style={{maxWidth:"min(200px, 100%)"}} {...register("number",  {valueAsNumber: true})} type="number" placeholder="Número"/>
							<input id="complement" {...register("complement")} type="text" placeholder="Complemento"/>
						</InputContainer>

						<InputContainer>
							<input style={{maxWidth:"min(200px, 100%)"}} {...register("district")} type="text" placeholder="Bairro"/>
							<input style={{maxWidth:"min(276px, 100%)"}} {...register("city")} type="text" placeholder="Cidade"/>
							<input style={{maxWidth:"min(60px, 100%)"}} {...register("state")} type="text" placeholder="UF"/>
						</InputContainer>
					</AddressInputs>

				</UserAddressContainer>

				<PaymentContainer>
					<FormPartsTitle>
						<CurrencyDollar size={22} color={tokens.SdBrandPurple}/>
						<div>
							<h3>Pagamento</h3>
							<h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
						</div>
					</FormPartsTitle>

					<SelectPaymentContainer>
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
					</SelectPaymentContainer>
				</PaymentContainer>
			</UserInformationContainer>

			<ProductsSummaryContainer>
				<h2>Café selecionados</h2>

				<ConfirmProductSummary>
					Teste
				</ConfirmProductSummary>

			</ProductsSummaryContainer>
		</CheckoutContainer>
	);
}