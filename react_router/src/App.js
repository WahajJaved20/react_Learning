import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
	return (
		// everything inside router will have routing
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	);
};
