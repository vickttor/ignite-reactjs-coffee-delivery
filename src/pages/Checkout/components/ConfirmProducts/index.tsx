import { ICoffeeProduct } from "../../../../@types/Product";
import { CoffeInCart } from "../../../../components/CoffeInCart";
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
					<p>{FormatCurrecy(29.7)}</p>
				</PricesSummary>
						
				<PricesSummary>
					<p>Entrega</p>
					<p>{FormatCurrecy(3.30)}</p>
				</PricesSummary>
						
				<TotalPrice>
					<p>Total</p>
					<p>{FormatCurrecy(33.2)}</p>
				</TotalPrice>
			</PricessSumaryContainer>

			<ConfirmOrder type="submit" whileTap={{scale:0.95}}>
				Confirmar Pedido
			</ConfirmOrder>
		</ConfirmProductContainer>
	);
}