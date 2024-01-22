import { useContext } from "react"
import { ContextWrapper } from "../App"
function Current({ text }) {
	const { currentTheme } = useContext(ContextWrapper)

	// console.log(myContext)

	return <div>{currentTheme}</div>
}

export default Current
