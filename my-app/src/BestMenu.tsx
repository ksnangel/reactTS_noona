import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Omit<Menu, "price"> {
	//Menu 그대로 가져올수 있다.
	//그리고 더 추가하고 싶으면 더하면 된다!!
	showBestMenuName(name: string): string;
	//Omit으로 Menu에서 price 빼준다
}

// type OwnProps = Menu &{
// 	showBestMenuName(name: string): string;
// }
const BestMenu: React.FC<OwnProps> = (name, category, showBestMenuName) => {
	return <div>{name}</div>;
};

export default BestMenu;
