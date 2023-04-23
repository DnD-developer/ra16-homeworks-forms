import "./Conclusion.css"
import Item from "../Item-component/Item"

export default function Conclusion({ list, onClickEdit, onClickDelete }) {
	return (
		<>
			<div className="conclusion">
				<div className="conclusion__title">
					<h2 className="conclusion__title-date">Дата (дд.мм.гг)</h2>
					<h2 className="conclusion__title-length">Пройдено км</h2>
					<h2 className="conclusion__title-actions">Действия</h2>
				</div>
				{list.length ? (
					<ul className="conclusion__list">
						{list.map(item => (
							<Item key={item.id} item={item} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
						))}
					</ul>
				) : null}
			</div>
		</>
	)
}
