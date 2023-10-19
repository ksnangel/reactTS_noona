import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
	name: "누나네식당",
	category: "western",
	address: {
		city: "inchon",
		detail: "somewher",
		zipCode: 123468
	},
	menu: [
		{ name: "로제파스타", price: 2000, category: "파스타" },
		{ name: "갈릭 파스타", price: 3000, category: "파스타" }
	]
};

const App: React.FC = () => {
	const [myRestaurant, setMySestaurant] = useState<Restaurant>(data);

	const changeAddress = (address: Address) => {
		setMySestaurant({ ...myRestaurant, address: address });
		// return true ;
	};

	const showBestMenuName = (name: string) => {
		return name;
	};
	return (
		<div className='App'>
			<Store info={myRestaurant} changeAddress={changeAddress} />
			<BestMenu name='불고기피자' category='피자' showBestMenuName={showBestMenuName} />
		</div>
	);
};

export default App;
