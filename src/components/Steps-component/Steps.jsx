import { useState } from "react"
import InputForm from "../InputFom-component/InputForm"
import InputFormRender from "../InputFom-component/InputFormRender"
import Conclusion from "../conclusion-component/Conclusion"
import { v4 } from "uuid"
import "./Steps.css"

function dateNumber(date) {
	const dateNumber = date.replace(/\./g, "")

	return `${dateNumber[4]}${dateNumber[5]}${dateNumber[2]}${dateNumber[3]}${dateNumber[0]}${dateNumber[1]}`
}

export default function Steps() {
	const [listData, setListData] = useState([
		{ id: 1, date: "12.02.18", length: 5.3 },
		{ id: 2, date: "06.01.19", length: 6.3 },
		{ id: 3, date: "23.05.23", length: 9.3 }
	])

	const [inputForm, setInputForm] = useState(<InputForm render={InputFormRender} onSubmit={onSubmit} />)

	const onClickEdit = id => {
		const [{ date, length }] = listData.filter(item => item.id === id)
		setInputForm(<InputForm date={date} length={length} render={InputFormRender} onSubmit={onSubmit} />)
	}

	const onClickDelete = id => {
		setListData(prev => {
			return prev.filter(item => item.id !== id)
		})
	}

	function onSubmit({ date, length }) {
		const id = v4()

		setListData(prev => {
			const indexNew = prev.findIndex(item => item.date === date)

			if (indexNew != -1) {
				const newData = [...prev]

				newData[indexNew].length += length

				return newData
			}

			prev.push({
				id,
				date,
				length
			})

			const newData = [...prev]

			newData.sort((date1, date2) => {
				return dateNumber(date2.date) - dateNumber(date1.date)
			})

			return newData
		})
	}

	return (
		<>
			<div className="steps">
				{inputForm}
				<Conclusion list={listData} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
			</div>
		</>
	)
}
