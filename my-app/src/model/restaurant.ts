// let data = {
// 	name: "누나네 식당",
// 	category: "western",
// 	address: {
// 		city: "inchon",
// 		detail: "somewher",
// 		zipCode: 123468
// 	},
// 	menu: [
// 		{ name: "로제파스타", price: 2000, category: "파스타" },
// 		{ name: "갈릭 파스타", price: 3000, category: "파스타" }
// 	]
// };

export type Restaurant = {
	name: string;
	category: string;
	address: Address;
	menu: Menu;
};

export type Address = {
	city: string;
	detail: string;
	zipCode: number;
};

export type Menu = {
	name: string;
	price: number;
	category: string;
}[];

export type AddressWithoutZip =Omit<Address, 'zipCode'>
//Omit을 사용해서 Address 타입에서 zipCode 빼줄수 있다.!!

export type RestaurantOnlyCategory =Pick<Restaurant, 'category'>
//Pick 원하는 것만 가져와서 쓰고 싶을때

//? 사용해서 zipCode가 있어도 좋고 없어도 좋고
//	zipCode?: number;

export type ApiResponse<T>{
	data:T   [],
	totalPage:number,
	page:number
}

export type RestaurantResponse =ApiRestaurantResponse<Restaurant>
export type MenuResponse = ApiMenuResponse<Menu>