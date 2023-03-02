import { useContext } from "react";
import { ICoffeeProduct } from "../../../../@types/Product";
import { CoffeInCart } from "../../../../components/CoffeInCart";
import { CartContext } from "../../../../context/Cart";
import { FormatCurrecy } from "../../../../utils/formatMoney";
import { 
	ConfirmOrder, 
	ConfirmProductContainer, 
	PricessSumaryContainer, 
	PricesSummary, 
	ProductsOverflow, 
	TotalPrice
} from "./style";

interface IConfirmProductsProps {
  products: ICoffeeProduct[]
}

export function ConfirmProducts(props: IConfirmProductsProps) {
	
	const { products, handleGetTotalPrice, freight} = useContext(CartContext);

	return (
		<ConfirmProductContainer>
			<ProductsOverflow>
				{props.products.map((product)=>{
					return (
						<CoffeInCart key={product.id} product={product}/>
					);
				})}
			</ProductsOverflow>

			<PricessSumaryContainer>
				<PricesSummary>
					<p>Total de itens</p>
					<p>{products.length}</p>
				</PricesSummary>
						
				<PricesSummary>
					<p>Entrega</p>
					<p>{FormatCurrecy(freight)}</p>
				</PricesSummary>
						
				<TotalPrice>
					<p>Total</p>
					<p>{FormatCurrecy(handleGetTotalPrice())}</p>
				</TotalPrice>
			</PricessSumaryContainer>

			<ConfirmOrder type="submit" whileTap={{scale:0.95}}>
				Confirmar Pedido
			</ConfirmOrder>
		</ConfirmProductContainer>
	);
}