import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Services from "./services";
import Footer from "./footer";

import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<div className="transition-all duration-1000 App dark:bg-gray-800">
			<>
				<ThemeProvider>
					<div className="mx-4 md:mx-14 lg:mx-28 xl:mx-56 ">
						<Nav />

						<Header />
						<Services />
						<Footer />
					</div>
				</ThemeProvider>
			</>
		</div>
	);
}

export default App;
