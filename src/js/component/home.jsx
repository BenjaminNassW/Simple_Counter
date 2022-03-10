import React from "react";
import reactDom from "react-dom";
import Counter from "./secondsCounter.jsx";
import Countdown from "./countdown.jsx";
import { createElement } from "react/cjs/react.development";

//create your first component
var contador = 0;
var contador2 = 133;
function Home() {
	contador += 1;
	contador2 -= 1;

	return (
		<div>
			<Counter segundos={contador} />
			<Countdown tiempo={contador2} />
		</div>
	);
}

export default Home;
