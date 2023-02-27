import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ICoffeeProduct } from "../../@types/Product";
import { Badge } from "../Badge";
import { AddToCartContainer, Cart, CoffeCardBadgesContainer, CoffeCardBuyContainer, CoffeCardContainer, DecreaseButton, IncreaseButton, InputContainer } from "./style";
import { motion } from "framer-motion";

interface ICoffeCardProps {
  product: ICoffeeProduct
}

export function CoffeCard({product}: ICoffeCardProps){
	
	const [itemAmount, setItemAmount] = useState(0);

	const handleIncreaseItemAmount = () => {
		setItemAmount((amount)=> amount + 1);
	};

	const handleDecreaseItemAmount = () => {
		if(itemAmount > 0) setItemAmount((amount)=> amount - 1);
	};
	

	return (
		<CoffeCardContainer>
			<motion.img src={product.imgSrc} alt={product.title} whileHover={{
				scale: 1.1
			}}/>
			<CoffeCardBadgesContainer>
				{product.badges.map((label)=> {
					return <Badge key={label} label={label} />;
				})}
			</CoffeCardBadgesContainer>

			<h3>{product.title}</h3>

			<p>{product.description}</p>

			<CoffeCardBuyContainer>
				{/* Price */}
				<span>
					R$ 
					<span>	
						{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price).replace("R$", "")}
					</span>
				</span>

				<AddToCartContainer>
					<InputContainer>
						<DecreaseButton type="button" onClick={handleDecreaseItemAmount}>-</DecreaseButton>
						<input type="number" min={0} step={1} max={100} value={itemAmount} onChange={(event)=>setItemAmount(Number(event.target.value))}/>
						<IncreaseButton type="button" onClick={handleIncreaseItemAmount}>+</IncreaseButton>
					</InputContainer>

					<Cart 
						onClick={()=>{console.log("Shop Cart");}}
						whileHover={{scale:1.1}} 
						whileTap={{scale:1}}
					>
						<ShoppingCart size={22} weight="fill"/>
					</Cart>
				</AddToCartContainer>

			</CoffeCardBuyContainer>
		</CoffeCardContainer>
	);
}