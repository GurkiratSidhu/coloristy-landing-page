import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Toggle from "./toggle";
import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<div className="transition-all duration-1000 App dark:bg-gray-800">
			<>
				<ThemeProvider>
					<Nav />
					<Toggle />
					<Header />
				</ThemeProvider>
			</>
		</div>
	);
}

export default App;
