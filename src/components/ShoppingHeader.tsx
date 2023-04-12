import { Link } from "react-router-dom";

function ShoppingHeader() {
	return (
		<div className="shopping-header">
			<h1> React-TS Store </h1>
			<div className="icon-routes">
				<Link to="/">
					<i className="fa fa-home"></i>
				</Link>
				<Link to="/cart">
					<i className="fa fa-shopping-bag"></i>
				</Link>
			</div>
		</div>
	);
}

export default ShoppingHeader;
