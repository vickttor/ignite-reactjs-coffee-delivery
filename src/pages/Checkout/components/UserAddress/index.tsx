import { AddressInputs, InputContainer, Title, UserAddressContainer } from "./style";
import { useFormContext } from "react-hook-form";
import { MapPinLine } from "phosphor-react";

import * as tokens from "../../../../styles/tokens/variables";

export function UserAddress() {
	const { register } = useFormContext();

	return (
		<UserAddressContainer>
			<Title>
				<MapPinLine size={22} color={tokens.SdBrandYellowDark}/>
				<div>
					<h3>Endereço de Entrega</h3>
					<h4>Informe o endereço onde deseja receber seu pedido</h4>
				</div>
			</Title>

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
	);
}