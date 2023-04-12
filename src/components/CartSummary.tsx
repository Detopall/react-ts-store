import { IProduct } from "./FetchShoppingItems";

interface ICartSummeryProps {
	products: IProduct[];
}

function CartSummary({ products }: ICartSummeryProps) {
	let totalPrice = 0;
	let totalProducts = 0;
	products.map((product) => {
		totalPrice += product.price * (product.amount || 1);
		totalProducts += product.amount || 1;
	});

	return (
		<div className="cart-summary">
			<h2> Cart Summary </h2>
			<span className="total-price">Total: ${totalPrice.toFixed(2)}</span>
			<span className="total-articles">Articles: {totalProducts} </span>
			<button className="buy-container"> Process to checkout </button>
		</div>
	);
}

export default CartSummary;
