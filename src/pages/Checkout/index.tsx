import { 
	CheckoutContainer, 
	ProductsSummaryContainer,  
	UserInformationContainer,
} from "./style";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import { UserAddress } from "./components/UserAddress";
import { PaymentOptions } from "./components/PaymentOptions";
import { ConfirmProducts } from "./components/ConfirmProducts";
import { CartContext } from "../../context/Cart";
import { UserInformationSchema, UserInformationType } from "../../entities/userInformation/schema";
import { useNavigate } from "react-router-dom";


export function Checkout(){

	const navigate = useNavigate();
	const {products, userInformation, handleSetUserInformation} = useContext(CartContext);

	const CheckoutForm = useForm<UserInformationType>({
		defaultValues: {
			...userInformation
		},
		resolver: zodResolver(UserInformationSchema)
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

	const handleAddressSubmit = (data: UserInformationType) => {
		handleSetUserInformation(data);
		
		navigate("/success");
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