import { useEffect, useState } from "react";

import http from "./services/http";
import { IDigimon } from "./types/IDigimon";
import { randomPoint } from "./util/randomPoint";
import { DigimonCard } from "./components/DigimonCard";

import "./style/App.css";

/*
    #Ao acessar a primeira página ele deve digitar um nome e clicar em ver cartas.
    #Na tela seguinte ele visualiza as 5 cartas e o  seu nome no canto superior direito.
*/

function App() {
	const [digimons, setDigimons] = useState<IDigimon[]>([]);
	const [limit, setLimit] = useState<number>(5);
	const [limitAttempts, setLimitAttempts] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getDigimon = async () => {
			const { data } = await http.get("/digimon");

			const digimons = data.map((digimon: IDigimon) => {
				digimon.points = randomPoint();
				return digimon;
			});

			setDigimons(digimons);
			setLoading(false);
		};

		getDigimon();
	}, []);

	const digimonList = digimons.slice(0, limit);

	const handleLimitChangeCard = () => {
		setLimit(Number(limit + 1));
		setLimitAttempts(Number(limitAttempts + 1));
	};

	const handleShuffleCard = () => {
		const digimonShuffle = digimonList.sort((a, b) => {
			return 0.5 - Math.random();
		});

		setDigimons([...digimonList, ...digimonShuffle]);
	};

	return (
		<div className="container">
			<h4 className="text-right m-bottom">Martins Gouveia</h4>

			<div className="card-content">
				{!!loading && <h4 className="text-center">Carregando....</h4>}

				{digimonList.map((digimon, key) => (
					<DigimonCard
						id={key}
						name={digimon.name}
						img={digimon.img}
						level={digimon.level}
						points={digimon.points}
					/>
				))}
			</div>

			<div className="button-group m-top">
				<button
					className="button-group-item"
					onClick={handleLimitChangeCard}
					disabled={limitAttempts > 2 ? true : false}
				>
					Ver mais
				</button>
				<button className="button-group-item" onClick={handleShuffleCard}>
					Embaralhar
				</button>
			</div>
		</div>
	);
}

export default App;
