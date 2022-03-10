import propTypes from "prop-types";
import React from "react";

const Countdown = (props) => {
	return (
		<div className="d-flex bg-light text-white">
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				<i className="fas fa-clock "></i>
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.tiempo / 100000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.tiempo / 10000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.tiempo / 1000) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.tiempo / 100) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{parseInt(props.tiempo / 10) % 10}
			</div>
			<div className="col-1 bg-dark mx-1 fs-1 text-center">
				{props.tiempo % 10}
			</div>
		</div>
	);
};
export default Countdown;
