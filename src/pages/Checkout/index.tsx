import { 
	CheckoutContainer, 
	ProductsSummaryContainer,  
	UserInformationContainer,
} from "./style";

import { useForm, FormProvider } from "react-hook-form";
import { useContext } from "react";
import { UserAddress } from "./components/UserAddress";
import { PaymentOptions } from "./components/PaymentOptions";
import { ConfirmProducts } from "./components/ConfirmProducts";
import { CartContext } from "../../context/Cart";
import { Payment, UserInformationSchema, UserInformationType } from "../../entities/userInformation/schema";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../utils/handleError";

export function Checkout(){

	const navigate = useNavigate();
	const {products, userInformation, handleSetUserInformation , handleConfirmPurchase} = useContext(CartContext);

	const CheckoutForm = useForm<UserInformationType>({
		defaultValues: {
			...userInformation, 
			payment: Payment.CREDIT
		},
	});

	const {handleSubmit } = CheckoutForm;

	const handleUserInformationSubmit = (data: UserInformationType) => {

		try {
			UserInformationSchema.parse(data);

			handleSetUserInformation(data);
			handleConfirmPurchase();
			navigate("/success");

		} catch(err) {
			handleError(err);
		}
	};
	
	return(
		<CheckoutContainer onSubmit={handleSubmit(handleUserInformationSubmit)}>
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