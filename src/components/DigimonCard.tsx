import { IDigimon } from "types/IDigimon";

export function DigimonCard({ id, name, img, level, points }: IDigimon) {
	return (
		<div className="card-item">
			<img className="card-image" src={img} />
			<h2 className="card-title">
				{id}. {name}
			</h2>
			<p className="card-subtitle">Tipos: {level}</p>
			<p className="card-subtitle">Pontos: {points}</p>
		</div>
	);
}
