import { IProduct } from "./FetchShoppingItems";

interface IProductItem {
	product: IProduct;
	addToCart: (productId: number) => void;
}

export function formatPrice(price: number): string {
	const formattedPrice = price.toFixed(2);
	const decimalIndex = formattedPrice.indexOf(".");
	const decimalPlaces =
		decimalIndex !== -1 ? formattedPrice.length - decimalIndex - 1 : 0;
	if (decimalPlaces < 2) {
		return formattedPrice + "0".repeat(2 - decimalPlaces);
	}
	return formattedPrice;
}

function ShoppingItem({ product, addToCart }: IProductItem) {
	return (
		<div key={product.id.toString()} className="product">
			<div className="img-container">
				<img src={product.image} alt={product.title} />
			</div>
			<div className="product-content">
				<h3> {product.title} </h3>
				<span className="product-category"> {product.category} </span>
				<p> {product.description} </p>
				<span className="product-rating">
					<i className="fa fa-star checked"></i>
					{product.rating.rate} ({product.rating.count})
				</span>
			</div>
			<div className="price-container">
				<span className="product-price">
					${formatPrice(product.price)}
				</span>
			</div>
			<div
				className="buy-container"
				onClick={() => addToCart(product.id)}
			>
				<i className="fa fa-plus"></i>
				<i className="fa fa-shopping-cart"></i>
			</div>
		</div>
	);
}

export default ShoppingItem;
