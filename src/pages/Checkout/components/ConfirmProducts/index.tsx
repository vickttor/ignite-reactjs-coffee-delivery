import { ICoffeeProduct } from "../../../../@types/Product";
import { CoffeInCart } from "../../../../components/CoffeInCart";
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
		</ConfirmProductContainer>
	);
}