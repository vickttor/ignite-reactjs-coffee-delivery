import { useState } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { ICoffeeProduct } from "../../@types/Product";
import { 
	CoffeInCartContainer, 
	DecreaseButton, 
	HandleCoffeInCartContainer,
	IncreaseButton, 
	InputContainer,  
} from "./style";

interface ICoffeInCart {
  product: ICoffeeProduct
}

export function CoffeInCart(props: ICoffeInCart) {

	const [itemAmount, setItemAmount] = useState(0);

	const handleIncreaseItemAmount = () => {
		setItemAmount((amount)=> amount + 1);
	};

	const handleDecreaseItemAmount = () => {
		if(itemAmount > 0) setItemAmount((amount)=> amount - 1);
	};

	return (
		<CoffeInCartContainer>
			<img src={props.product.imgSrc} alt="Coffee" />
			<div>
				<div>
					<p>{props.product.title}</p>
					<span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(props.product.price)}</span>
				</div>
				<HandleCoffeInCartContainer>
					<InputContainer>
						<DecreaseButton type="button" onClick={handleDecreaseItemAmount}>
							<Minus size={14} weight="bold"/>
						</DecreaseButton>
						<input type="number" min={0} step={1} max={100} value={itemAmount} onChange={(event)=>setItemAmount(Number(event.target.value))}/>
						<IncreaseButton type="button" onClick={handleIncreaseItemAmount}>
							<Plus size={14} weight="bold"/>
						</IncreaseButton>
					</InputContainer>

					<button className="removeItem" type="button">
						<Trash size={16} />
              Remover
					</button>
				</HandleCoffeInCartContainer>
			</div>
		</CoffeInCartContainer>
	);
}