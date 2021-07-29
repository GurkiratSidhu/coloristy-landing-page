import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Services from "./services";
import Footer from "./footer";
import Projects from "./projects";

import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<div className="transition-all duration-1000 App dark:bg-gray-800">
			<>
				<ThemeProvider>
					<div className="mx-4 md:mx-14 lg:mx-24 xl:mx-40 2xl:mx-56 ">
						<Nav />
						<Header />
						<Projects />
						<Services />
						<Footer />
					</div>
				</ThemeProvider>
			</>
		</div>
	);
}

export default App;
