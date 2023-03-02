import { 
	CheckoutContainer, 
	ProductsSummaryContainer,  
	UserInformationContainer,
} from "./style";

import {z} from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { UserAddress } from "./components/UserAddress";
import { PaymentOptions } from "./components/PaymentOptions";
import { ConfirmProducts } from "./components/ConfirmProducts";
import { ICoffeeProduct } from "../../@types/Product";

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

	const CheckoutForm = useForm<AddressType>({
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

	const fakieProductsInCart: ICoffeeProduct[] = [
		{
			"id": "1",
			"imgSrc": "/assets/coffee-espresso.svg",
			"badges": ["tradicional"],
			"title": "Expresso tradicional",
			"description": "O tradicional café feito com água quente e grãos moídos",
			"price": 9.90
		},
		{
			"id": "2",
			"imgSrc": "/assets/coffee-american.svg",
			"badges": ["tradicional"],
			"title": "Expresso Americano",
			"description": "Expresso diluído, menos intenso que o tradicional",
			"price": 9.90
		},
		{
			"id": "3",
			"imgSrc": "/assets/coffee-creamy-espresso.svg",
			"badges": ["tradicional"],
			"title": "Expresso Cremoso",
			"description": "Café expresso tradicional com espuma cremosa",
			"price": 9.90
		},
	];
	
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

				<ConfirmProducts products={fakieProductsInCart ?? []}/>
			</ProductsSummaryContainer>
		</CheckoutContainer>
	);
}