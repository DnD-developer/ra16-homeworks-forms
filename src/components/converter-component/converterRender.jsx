import "./Converter.css"

export default function converterRender(hexInput, onChange) {
	const onHandlerChange = ({ target }) => {
		const { value } = target
		onChange(value)
	}
	const styleInlain = {
		backgroundColor: hexInput.color
	}

	return (
		<div className="color-converter" style={styleInlain}>
			<input type="text" value={hexInput.input} onChange={onHandlerChange} />
			<h2>{hexInput.text}</h2>
		</div>
	)
}
