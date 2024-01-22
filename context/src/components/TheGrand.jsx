import { useContext } from "react"
import NotThatLongAgo from "./NotThatLongAgo.jsx"
import { ContextWrapper } from "../App.jsx"
function TheGrand({ text }) {
	const { currentTheme, setCurrentTheme } = useContext(ContextWrapper)
	return (
		<>
			<button
				onClick={() =>
					setCurrentTheme(currentTheme === "dark" ? "light" : "dark")
				}>
				{currentTheme === "dark" ? "Light" : "Dark"} Mode
			</button>
			<NotThatLongAgo text={text} />
		</>
	)
}

export default TheGrand
