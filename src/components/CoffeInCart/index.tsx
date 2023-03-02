import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { ICoffeeProduct } from "../../@types/Product";
import { 
	ButtonRemoveProductFromCart,
	CoffeInCartContainer, 
	DecreaseButton, 
	HandleCoffeInCartContainer,
	IncreaseButton, 
	InputContainer,  
} from "./style";
import { FormatCurrecy } from "../../utils/formatMoney";
import { CartContext } from "../../context/Cart";

interface ICoffeInCart {
  product: ICoffeeProduct
}

export function CoffeInCart({product}: ICoffeInCart) {

	const { handleChangeProductItemAmount, handleRemoveProductToCart } = useContext(CartContext);

	return (
		<CoffeInCartContainer>
			<img src={product.imgSrc} alt="Coffee" />
			<div>
				<div>
					<p>{product.title}</p>
					<span>{FormatCurrecy(product.price)}</span>
				</div>
				<HandleCoffeInCartContainer>
					<InputContainer>
						<DecreaseButton type="button" onClick={()=>handleChangeProductItemAmount(product.id, product.amount - 1)}>
							<Minus size={14} weight="bold"/>
						</DecreaseButton>
						<input 
							type="number" 
							min={0} 
							step={1} 
							max={100} 
							value={product.amount} 
							onChange={(event)=>handleChangeProductItemAmount(product.id, event.target.valueAsNumber)}/>
						<IncreaseButton type="button" onClick={()=>handleChangeProductItemAmount(product.id, product.amount + 1)}>
							<Plus size={14} weight="bold"/>
						</IncreaseButton>
					</InputContainer>

					<ButtonRemoveProductFromCart 
						onClick={()=> {
							handleRemoveProductToCart(product.id);
						}}
						type="button" 
						whileTap={{scale:0.95}}
					>
						<Trash size={16} />
            Remover
					</ButtonRemoveProductFromCart>
				</HandleCoffeInCartContainer>
			</div>
		</CoffeInCartContainer>
	);
}