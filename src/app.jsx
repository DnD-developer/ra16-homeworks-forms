import React from "react"
import ReactDOM from "react-dom/client"
import converterRender from "./components/converter-component/converterRender"
import Converter from "./components/converter-component/Converter"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Converter render={converterRender} />
	</>
)
