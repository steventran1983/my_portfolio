import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import About from "./component/about/About";
import Home from "./component/home/Home";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
			</main>
		</>
	);
}

export default App;
