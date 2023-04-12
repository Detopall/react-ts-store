import { useState, useEffect } from "react";
import { IProduct } from "./FetchShoppingItems";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
	const [cartItems, setCartItems] = useState<IProduct[]>(() => {
		const items = localStorage.getItem("cartItems");
		return items ? JSON.parse(items) : [];
	});

	function handleAddOne(itemId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems.map((item) =>
				item.id === itemId
					? { ...item, amount: (item.amount || 0) + 1 }
					: item
			)
		);
	}

	function handleRemoveOne(itemId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems
				.map((item) =>
					item.id === itemId && item.amount && item.amount > 0
						? { ...item, amount: item.amount - 1 }
						: item
				)
				.filter((item) => item.amount !== 0)
		);
	}

	function handleRemoveItem(itemId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((item) => item.id !== itemId)
		);
	}

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className="cart-items">
			{cartItems.length === 0 && (
				<div className="empty-cart">
					<p> There is nothing in your cart! </p>
				</div>
			)}
			{cartItems.map((product) => (
				<CartItem
					key={product.id.toString()}
					handleAddOne={handleAddOne}
					handleRemoveOne={handleRemoveOne}
					handleRemoveItem={handleRemoveItem}
					product={product}
				></CartItem>
			))}

			{cartItems.length !== 0 && (
				<CartSummary products={cartItems}></CartSummary>
			)}
		</div>
	);
}

export default Cart;
