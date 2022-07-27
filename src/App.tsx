import { useEffect, useState } from "react";

import http from "./services/http";
import { IDigimon } from "./types/IDigimon";

import "./style/App.css";

function App() {
	const [digimons, setDigimons] = useState<IDigimon[]>([]);
	const [limit, setLimit] = useState<number>(5);

	useEffect(() => {
		const getDigimon = async () => {
			const { data } = await http.get("/digimon");

			setDigimons(data);
		};

		getDigimon();
	}, []);

	const digimonList = digimons.slice(0, limit);

	return (
		<div className="App">
			<div className="container">
				<div className="card-content">
					{digimonList.map((digimon, key) => (
						<div className="card-item" key={key}>
							<img className="card-image" src={digimon.image} />
							<h2 className="card-title">2. {digimon.name}</h2>
							<p className="card-subtitle">Type: {digimon.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
