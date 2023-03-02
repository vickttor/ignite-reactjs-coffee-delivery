export interface ICoffeeProduct {
  id: string;
  imgSrc: string;
  badges: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}

export type ICoffeesFromApi = Omit<ICoffeeProduct, "amount">