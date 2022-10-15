import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";
import Qualification from "./component/qualification/Qualification";
import Projects from "./component/projects/Projects";
import Testimonials from "./component/testimonials/Testimonials";
function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Projects/>
				<Testimonials />
			</main>
		</>
	);
}

export default App;
