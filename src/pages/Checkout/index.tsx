import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { Minus, Plus } from "phosphor-react";
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
	ConfirmProductSummary,
	ProductItemContainer,
	ProductActionContainer,
	DecreaseButton,
	IncreaseButton,
	ProductItemAmountInputContainer,
	ConfirmProductSummaryOverflow,
	PricesSummary,
	TotalPrice,
	PricessSumaryContainer,
	ConfirmOrder
} from "./style";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
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

	const [itemAmount, setItemAmount] = useState(0);

	const handleIncreaseItemAmount = () => {
		setItemAmount((amount)=> amount + 1);
	};

	const handleDecreaseItemAmount = () => {
		if(itemAmount > 0) setItemAmount((amount)=> amount - 1);
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
					<ConfirmProductSummaryOverflow>
						{[...Array(5)].map((_, index)=>{
							return (
								<ProductItemContainer key={index}>
									<img src="/assets/coffee-arabian.svg" alt="Coffee" />
									<div>
										<div>
											<p>Expresso Tradicional</p>
											<span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(9.90)}</span>
										</div>
										<ProductActionContainer>
											<ProductItemAmountInputContainer>
												<DecreaseButton type="button" onClick={handleDecreaseItemAmount}>
													<Minus size={14} weight="bold"/>
												</DecreaseButton>
												<input type="number" min={0} step={1} max={100} value={itemAmount} onChange={(event)=>setItemAmount(Number(event.target.value))}/>
												<IncreaseButton type="button" onClick={handleIncreaseItemAmount}>
													<Plus size={14} weight="bold"/>
												</IncreaseButton>
											</ProductItemAmountInputContainer>
		
											<button className="removeItem" type="button">
												<Trash size={16} />
											Remover
											</button>
										</ProductActionContainer>
									</div>
								</ProductItemContainer>
							);
						})}
					</ConfirmProductSummaryOverflow>

					<PricessSumaryContainer>
						<PricesSummary>
							<p>Total de itens</p>
							<p>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(29.7)}</p>
						</PricesSummary>
						
						<PricesSummary>
							<p>Entrega</p>
							<p>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(3.5)}</p>
						</PricesSummary>
						
						<TotalPrice>
							<p>Total</p>
							<p>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(33.2)}</p>
						</TotalPrice>
					</PricessSumaryContainer>

					<ConfirmOrder type="submit" whileTap={{scale:0.95}}>
						Confirmar Pedido
					</ConfirmOrder>
				</ConfirmProductSummary>
			</ProductsSummaryContainer>
		</CheckoutContainer>
	);
}