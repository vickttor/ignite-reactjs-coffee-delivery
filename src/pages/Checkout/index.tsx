import { 
	CheckoutContainer, 
	ProductsSummaryContainer,  
	UserInformationContainer,
} from "./style";

import {z} from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import { UserAddress } from "./components/UserAddress";
import { PaymentOptions } from "./components/PaymentOptions";
import { ConfirmProducts } from "./components/ConfirmProducts";
import { CartContext } from "../../context/Cart";

const AddressSchema = z.object({
	cep: z.string().min(8).max(8),
	street: z.string().min(3).max(100),
	number: z.number(),
	complement: z.string().max(100).optional(),
	district: z.string().min(3).max(100),
	city: z.string().min(3).max(100),
	state: z.string().min(3).max(100)
});

export type AddressType = z.infer<typeof AddressSchema>;

export function Checkout(){

	const {products} = useContext(CartContext);

	const CheckoutForm = useForm<AddressType>({
		defaultValues: {
			cep: "",
		},
		resolver: zodResolver(AddressSchema)
	});

	const {handleSubmit, formState: {errors}} = CheckoutForm;

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

				<FormProvider {...CheckoutForm}>
					<UserAddress/>
					<PaymentOptions/>
				</FormProvider>
			</UserInformationContainer>

			<ProductsSummaryContainer>
				<h2>Café selecionados</h2>

				<ConfirmProducts products={products}/>
			</ProductsSummaryContainer>
		</CheckoutContainer>
	);
}