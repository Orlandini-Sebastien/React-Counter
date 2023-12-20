import { useState } from "react";

import "./App.css";

function App() {
	const initial = 0;
	const [counter, setCounter] = useState(initial);
	return (
		<>
			<header> React Counter</header>
			<section>
				<div>
					<div  style={ (counter ===0) ? { display : "none" } : { display : "block" }}
						onClick={() => {
							setCounter((counter) => counter - 1);
             
						}}
					>
						-
					</div>
					<p>{counter}</p>
					<div
           style={ (counter ===10) ? { display : "none" } : { display : "block" }}
						onClick={() => {
							setCounter((counter) => counter + 1);
						}}
					>
						+
					</div>
				</div>

				<div
					onClick={() => {
						setCounter(initial);
					}}
				>
					Reset
				</div>
			</section>
		</>
	);
}

export default App;
