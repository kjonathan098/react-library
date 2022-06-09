import React from 'react'

function sayHelloItem(name) {
	alert('hola ' + name)
}

const ItemComponent = ({ item, onClick }) => {
	return (
		<div key={item.id} onClick={onClick}>
			{item.name}
		</div>
	)
}

const OnClickComponent = () => {
	const data = [
		{ id: 1, name: 'Uno' },
		{ id: 2, name: 'Dos' },
		{ id: 3, name: 'Tres' },
	]

	return (
		<div>
			<h2>//14</h2>
			{data.map((item) => {
				return (
					<ItemComponent
						item={item}
						onClick={(event) => {
							event.preventDefault()
							sayHelloItem(item.name)
						}}
					/>
				)
			})}
		</div>
	)
}

export default OnClickComponent
