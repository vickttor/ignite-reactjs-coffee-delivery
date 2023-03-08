import { useContext } from "react";
import { ICoffeeProduct } from "../../../../@types/Product";
import { CoffeInCart } from "../../../../components/CoffeInCart";
import { CartContext } from "../../../../context/Cart";
import { FormatCurrecy } from "../../../../utils/formatMoney";
import { Clipboard } from "phosphor-react";
import { 
	ConfirmOrder, 
	ConfirmProductContainer, 
	NoItemsContainer, 
	PricessSumaryContainer, 
	PricesSummary, 
	ProductsOverflow, 
	TotalPrice
} from "./style";

interface IConfirmProductsProps {
  products: ICoffeeProduct[]
}

export function ConfirmProducts({products}: IConfirmProductsProps) {
	
	const { handleGetTotalPrice, freight} = useContext(CartContext);

	const productsNotConfirmed = products.filter((product)=>!product.confirmed);

	return (
		<ConfirmProductContainer>
			{productsNotConfirmed.length ? 
				<ProductsOverflow>
					{productsNotConfirmed.map((product)=>{
						return (
							<CoffeInCart key={product.id} product={product}/>
						);
					})}
				</ProductsOverflow>
				: <NoItemsContainer>
					<Clipboard size={80} weight="duotone" />
					<p>Sem Produtos</p>
				</NoItemsContainer>
			}

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