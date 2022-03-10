//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/secondsCounter.jsx";

//render your react application
var contador = 0;
setInterval(() => {
	contador += 1;
	ReactDOM.render(
		<Counter segundos={contador} />,
		document.querySelector("#app")
	);
}, 1000);
