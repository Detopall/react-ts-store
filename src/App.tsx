import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FetchShoppingItems from "./components/FetchShoppingItems";
import ShoppingHeader from "./components/ShoppingHeader";
import Cart from "./components/Cart";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<ShoppingHeader />

				<Switch>
					<Route
						path="/"
						exact
						component={FetchShoppingItems}
					></Route>
					<Route path="/cart" component={Cart}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
