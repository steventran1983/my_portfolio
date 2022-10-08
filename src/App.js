import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/home/Home";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
			</main>
		</>
	);
}

export default App;
