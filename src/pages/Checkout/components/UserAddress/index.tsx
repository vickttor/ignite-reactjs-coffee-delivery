/* eslint-disable no-useless-escape */
import {
	AddressInputs,
	InputContainer,
	Title,
	UserAddressContainer,
} from "./style";
import { useFormContext, Controller } from "react-hook-form";
import { MapPinLine } from "phosphor-react";

import * as tokens from "../../../../styles/tokens/variables";
import axios, { AxiosResponse } from "axios";
import { AddressType } from "../..";

const applyMaskIntoCepField = (rawValue: string) => {
	const cepMask = /^(\d{5})(\d{3})$/; // Regular expression for CEP format

	if (cepMask.test(rawValue)) {
		return rawValue.replace(cepMask, "$1-$2"); // Apply the mask to the input value
	}

	return rawValue;
};

interface IAddressData {
  bairro: string;
  localidade: string;
  logradouro: string;
  uf: string;
	erro?: boolean
}

export function UserAddress() {
	const { register, control, watch, setValue, setFocus } = useFormContext<AddressType>();

	const cepWatch = watch("cep");

	const setFields = (addressData: IAddressData) => {
		setValue("street", addressData.logradouro);
		setValue("district", addressData.bairro);
		setValue("city", addressData.localidade);
		setValue("state", addressData.uf);
	};

	const fetchAddressData = async (rawCep: string) => {
		try {
			const response: AxiosResponse<IAddressData> = await axios.get(
				`https://viacep.com.br/ws/${rawCep}/json/`
			);
			const addressData = response.data;
		
			if(!addressData.erro) setFocus("number");
				
			setFields(addressData);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<UserAddressContainer>
			<Title>
				<MapPinLine size={22} color={tokens.SdBrandYellowDark} />
				<div>
					<h3>Endereço de Entrega</h3>
					<h4>Informe o endereço onde deseja receber seu pedido</h4>
				</div>
			</Title>

			<AddressInputs>
				<InputContainer>
					<Controller
						control={control}
						name="cep"
						render={({ field: { onChange, value } }) => (
							<input
								tabIndex={0}
								style={{ maxWidth: "min(200px, 100%)" }}
								value={value}
								onChange={(event) => {
									const rawCep = event.target.value.replace(/\D/g, "");

									if(rawCep.length > 8) return;

									if(cepWatch.length === 9 && rawCep.length < 8) {
										setFields({
											bairro: "",
											localidade: "",
											logradouro: "",
											uf: ""
										});
									}

									const inputWithMask = applyMaskIntoCepField(rawCep);
									
									if (rawCep.length === 8 && rawCep !== cepWatch.replace("-", "")) fetchAddressData(rawCep);

									onChange(inputWithMask);
								}}
								type="text"
								placeholder="CEP"
							/>
						)}
					/>
				</InputContainer>

				<InputContainer>
					<input tabIndex={1} {...register("street")} type="text" placeholder="Rua" />
				</InputContainer>

				<InputContainer>
					<input
						style={{ maxWidth: "min(200px, 100%)" }}
						{...register("number", { valueAsNumber: true })}
						type="number"
						placeholder="Número"
					/>
					<input
						id="complement"
						{...register("complement")}
						type="text"
						placeholder="Complemento"
					/>
				</InputContainer>

				<InputContainer>
					<input
						style={{ maxWidth: "min(200px, 100%)" }}
						{...register("district")}
						type="text"
						placeholder="Bairro"
					/>
					<input
						style={{ maxWidth: "min(276px, 100%)" }}
						{...register("city")}
						type="text"
						placeholder="Cidade"
					/>
					<input
						style={{ maxWidth: "min(60px, 100%)" }}
						{...register("state")}
						type="text"
						placeholder="UF"
					/>
				</InputContainer>
			</AddressInputs>
		</UserAddressContainer>
	);
}
