import React from "react";

const Counter = (props) => {
	return (
		<div className="d-flex bg-light text-white">
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.segundos / 100000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.segundos / 10000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.segundos / 1000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.segundos / 100) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.segundos / 10) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{props.segundos % 10}
			</div>
		</div>
	);
};
export default Counter;
