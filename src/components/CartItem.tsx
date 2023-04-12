import { IProduct } from "./FetchShoppingItems";
import { formatPrice } from "./ShoppingItem";

interface ICartProps {
	product: IProduct;
	handleAddOne: (productId: number) => void;
	handleRemoveOne: (productId: number) => void;
	handleRemoveItem: (productId: number) => void;
}

function CartItem({
	product,
	handleAddOne,
	handleRemoveOne,
	handleRemoveItem,
}: ICartProps) {
	return (
		<div className="product">
			<div className="img-container">
				<img src={product.image} alt={product.title} />
			</div>
			<div className="product-content">
				<h3> {product.title} </h3>
				<span className="product-category">{product.category}</span>
				<span className="product-rating">
					<i className="fa fa-star checked"></i>
					{product.rating.rate} ({product.rating.count})
				</span>
			</div>
			<div className="price-container">
				<span className="product-price">
					${formatPrice(product.price * (product.amount || 1))} (
					{product.amount} X ${formatPrice(product.price)})
				</span>
			</div>
			<div className="remove-buttons-container">
				<div
					className="remove-container"
					onClick={() => handleAddOne(product.id)}
				>
					<i className="fa fa-plus"></i>
				</div>
				<div
					className="remove-container"
					onClick={() => handleRemoveOne(product.id)}
				>
					<i className="fa fa-minus"></i>
				</div>
				<div
					className="remove-container"
					onClick={() => handleRemoveItem(product.id)}
				>
					<i className="fa fa-trash-o"></i>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
