import { Route, Routes } from "react-router-dom";

import { DigimonList } from "../components/DigimonList";
import { Home } from "../components/Home";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/digimons" element={<DigimonList />}></Route>
		</Routes>
	);
}
