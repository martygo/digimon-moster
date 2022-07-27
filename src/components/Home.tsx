import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../util/storage";

export function Home() {
	const [name, setName] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		saveUser(name);

		navigate("/digimons");
	};

	return (
		<>
			<main className="home">
				<h2 className="text-center text-white mb-4">Digite seu nome!</h2>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							placeholder="digite seu nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="form-control"
							required={true}
						/>
					</div>

					<button type="submit" className="button-group-item mt-4">
						Ver cartas
					</button>
				</form>
			</main>
		</>
	);
}
