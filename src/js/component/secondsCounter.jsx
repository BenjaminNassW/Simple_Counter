import React from "react";

const Counter = (props) => {
	return (
		<div className="d-flex">
			<div>{props.cienmil}</div>
			<div>{props.diezmil}</div>
			<div>{props.mil}</div>
			<div>{props.centena}</div>
			<div>{props.decena}</div>
			<div>{props.segundos}</div>
		</div>
	);
};
export default Counter;
