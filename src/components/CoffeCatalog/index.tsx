import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ICoffeesFromApi } from "../../@types/Product";
import { BadgeCatalog } from "../BadgeCatalog";
import { AddToCartContainer, Cart, CoffeCardBadgesContainer, CoffeCardBuyContainer, CoffeCardContainer, DecreaseButton, IncreaseButton, InputContainer } from "./style";
import { motion } from "framer-motion";
import { CartContext } from "../../context/Cart";
import { FormatCurrecy } from "../../utils/formatMoney";

interface ICoffeCardProps {
  product: ICoffeesFromApi
}

export function CoffeCatalog({product}: ICoffeCardProps){
	
	const [itemAmount, setItemAmount] = useState(1);

	const { handleAddProductToCart } = useContext(CartContext);

	const handleIncreaseItemAmount = () => {
		setItemAmount((amount)=> amount + 1);
	};

	const handleDecreaseItemAmount = () => {
		if(itemAmount > 0) setItemAmount((amount)=> amount - 1);
	};

	const sendProductToCart = () => {
		const payload = {
			...product, 
			amount: itemAmount
		};

		handleAddProductToCart(payload);
	};

	return (
		<CoffeCardContainer>
			<motion.img src={product.imgSrc} alt={product.title} whileHover={{
				scale: 1.1
			}}/>
			<CoffeCardBadgesContainer>
				{product.badges.map((label)=> {
					return <BadgeCatalog key={label} label={label} />;
				})}
			</CoffeCardBadgesContainer>

			<h3>{product.title}</h3>

			<p>{product.description}</p>

			<CoffeCardBuyContainer>
				{/* Price */}
				<span>
					R$ 
					<span>	
						{FormatCurrecy(product.price).replace("R$", "")}
					</span>
				</span>

				<AddToCartContainer>
					<InputContainer>
						<DecreaseButton type="button" onClick={handleDecreaseItemAmount}>
							<Minus size={14} weight="bold"/>
						</DecreaseButton>
						<input type="number" min={0} step={1} max={100} value={itemAmount} onChange={(event)=>setItemAmount(Number(event.target.value))}/>
						<IncreaseButton type="button" onClick={handleIncreaseItemAmount}>
							<Plus size={14} weight="bold"/>
						</IncreaseButton>
					</InputContainer>

					<Cart 
						onClick={sendProductToCart}
						whileTap={{scale:0.85}}
					>
						<ShoppingCart size={22} weight="fill"/>
					</Cart>
				</AddToCartContainer>

			</CoffeCardBuyContainer>
		</CoffeCardContainer>
	);
}