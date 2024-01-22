import { useState, createContext } from "react"
import TheAncient from "./components/TheAncient"

import "./App.css"

export const ContextWrapper = createContext()

function App() {
	const [currentTheme, setCurrentTheme] = useState("dark")
	return (
		<ContextWrapper.Provider
			value={{ currentTheme, setCurrentTheme, text: "Hi from context!" }}>
			<TheAncient text={"Hi there"} />
		</ContextWrapper.Provider>
	)
}

export default App
