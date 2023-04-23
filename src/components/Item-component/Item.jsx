import "./Item.css"

export default function Item({ item, onClickEdit, onClickDelete }) {
	const { id, date, length } = item

	const onClickEditHandler = () => {
		onClickEdit(id)
	}

	const onClickDeleteHandler = () => {
		onClickDelete(id)
	}

	return (
		<li className="item">
			<h3 className="item__date">{date}</h3>
			<h3 className="item__length">{length}</h3>
			<div className="item__buttons">
				<button className="item__buttons-edit" onClick={onClickEditHandler}>
					<span className="material-symbols-outlined">edit</span>
				</button>
				<button className="item__buttons-delete" onClick={onClickDeleteHandler}>
					<span className="material-symbols-outlined">block</span>
				</button>
			</div>
		</li>
	)
}
