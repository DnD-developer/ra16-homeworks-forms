import { useState } from "react"

export default function InputForm({ date = "", length = "", render, onSubmit }) {
	const [state, setState] = useState({
		date,
		length
	})

	const onChangeDate = input => {
		const subReg = /[\d\.]/

		if ((input.length <= 8 && subReg.test(input[input.length - 1])) || input.length === 0) {
			setState(prev => {
				return { ...prev, date: input }
			})
		}

		setState(prev => {
			return { ...prev }
		})
	}

	const onChangeLenght = input => {
		const subReg = /[\d\.]/

		if (subReg.test(input[input.length - 1]) || input.length === 0) {
			setState(prev => {
				return { ...prev, length: input }
			})
		}

		setState(prev => {
			return { ...prev }
		})
	}

	return render(state, onSubmit, onChangeDate, onChangeLenght)
}
