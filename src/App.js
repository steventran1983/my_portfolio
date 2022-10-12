import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Services />
			</main>
		</>
	);
}

export default App;
