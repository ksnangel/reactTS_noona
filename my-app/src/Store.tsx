import React from "react";
import { Restaurant } from "./model/restaurant";

interface OwnProps {
	info: Restaurant;
	changeAddress(address: Address): void;
	//changeAddress 함수 () : 리턴타입이 뭐냐. void 등등
	//함수선언시  return true ;  했다면  void가 아니라 boolean으로 하면 된다.
}

const Store: React.FC<OwnProps> = ({ info }) => {
	return <div>{info.name}</div>;
};

export default Store;
