import React from "react";
import { useGlobalContext } from "../context/context";

const Modal = () => {
	const { valueModal } = useGlobalContext();
	console.log(valueModal);
	return <div>Modal</div>;
};

export default Modal;
