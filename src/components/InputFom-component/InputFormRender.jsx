import "./inputForm.css"

export default function InputFormRender(inputs, onSubmit, onChangeDateFunc, onChangeLenghtFunc) {
	const { date, length } = inputs

	const OnChangeHandler = ({ target }) => {
		const { value, name } = target

		if (name === "input-date") {
			onChangeDateFunc(value)

			return
		}

		onChangeLenghtFunc(value)
	}

	const onSubmitHandler = target => {
		target.preventDefault()

		if (date && length) {
			onSubmit({ date, length: +length })
		}

		onChangeDateFunc("")
		onChangeLenghtFunc("")
	}

	return (
		<form className="input-form" name="input-form" onSubmit={onSubmitHandler}>
			<label className="input-from__date">
				Дата (дд.мм.гг)
				<input type="text" value={date} name="input-date" onChange={OnChangeHandler} />
			</label>
			<label className="input-from__lenght">
				Пройдено км
				<input type="text" value={length} name="input-length" onChange={OnChangeHandler} />
			</label>
			<button className="input-form__button">Ок </button>
		</form>
	)
}
