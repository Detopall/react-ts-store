import { useEffect, useState } from "react";
import ShoppingItem from "./ShoppingItem";

export interface IProduct {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: {
		count: number;
		rate: number;
	};
	title: string;
	amount?: number;
}

function FetchShoppingItems() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [cartItems, setCartItems] = useState<IProduct[]>(() => {
		const items = localStorage.getItem("cartItems");
		return items ? JSON.parse(items) : [];
	});

	useEffect(() => {
		async function fetchData() {
			const fetched = await fetch("https://fakestoreapi.com/products");
			if (!fetched.ok) {
				throw new Error("Failed to fetch posts");
			}
			const response = await fetched.json();
			setProducts(response as IProduct[]);
		}

		fetchData();
	}, []);

	function updateCart(cartItems: IProduct[]) {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}

	function addToCart(productId: number) {
		const existingCartItem = cartItems.find(
			(item) => item.id === productId
		);

		if (existingCartItem) {
			setCartItems((prevCartItems) => {
				const updatedItems = prevCartItems.map((item) =>
					item.id === productId
						? { ...item, amount: item.amount! + 1 }
						: item
				);
				updateCart(updatedItems);
				return updatedItems;
			});
		} else {
			const productToAdd = products.find(
				(item) => item.id === productId
			) as IProduct;
			setCartItems((prevCartItems) => {
				const updatedItems = [
					...prevCartItems,
					{ ...productToAdd, amount: 1 },
				];
				updateCart(updatedItems);
				return updatedItems;
			});
		}
	}

	return (
		<ul id="products">
			{products.map((product) => {
				return (
					<ShoppingItem
						product={product}
						key={product.id}
						addToCart={addToCart}
					></ShoppingItem>
				);
			})}
		</ul>
	);
}

export default FetchShoppingItems;
