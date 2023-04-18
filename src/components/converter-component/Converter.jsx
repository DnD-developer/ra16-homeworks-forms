import { useState } from "react"

function colorDisplay(input) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input)
	return result
		? {
				text: `(rgb ${parseInt(result[1], 16)}, ${parseInt(result[2], 16)} ,${parseInt(result[3], 16)})`,
				color: input
		  }
		: {
				text: "Ошибка",
				color: "#ff0000"
		  }
}

export default function Converter({ render }) {
	const [hexInput, setHexInput] = useState({
		input: "",
		text: "",
		color: "#ffffff"
	})

	const onChange = input => {
		const reg = /^#[\w\d]*$/i
		const validation = prev => {
			if (reg.test(input)) {
				if (input.length === 7) {
					const { text, color } = colorDisplay(input)

					return { ...prev, input, text, color }
				}

				return { ...prev, input, text: "", color: "#ffffff" }
			}

			return { ...prev }
		}
		setHexInput(validation)
	}

	return <>{render(hexInput, onChange)}</>
}
