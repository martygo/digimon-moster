import { Routes, Route, Link } from "react-router-dom";
import { Router } from "./router/Router";
import { Home } from "./components/Home";
import { DigimonList } from "./components/DigimonList";

import "./style/App.css";

/*
    #Ao acessar a primeira página ele deve digitar um nome e clicar em ver cartas.
    #Na tela seguinte ele visualiza as 5 cartas e o  seu nome no canto superior direito.
*/

function App() {
	return (
		<>
			<Router />
		</>
	);
}

export default App;
