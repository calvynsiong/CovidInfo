import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Card, Chart, Country, Cover, Footer } from './components';
import { fetchCadData, fetchData } from './api';
import Static from "./components/Static";

function App() {
<<<<<<< HEAD
	const [global, setGlobal] = useState({ data: {}, country: '' });
	const [CadState, setCadState] = useState({ Canada: {} });

	// Load Canadian data (cumulative_vaccines, daily_vaccs, province)
	useEffect(() => {
		async function componentDidMount() {
			const Canada = await fetchCadData();
		}
		componentDidMount();
	}, []);

	// Load Global data (total cases, recoveries, deaths)
	useEffect(() => {
		async function componentDidMount() {
			const data = await fetchData();
			console.log(data);
			setGlobal({ data });
		}
		componentDidMount();
	}, []);

	// console.log('====================================');
	// console.log(CadState);
	// console.log('====================================');
	// Initializes a function that sets state to an object with the confirmed/recoveries/death objects of a SPECIFIC COUNTRY, and passes the country in as well as parameter
	const handleCountryChange = async (country) => {
		const data = await fetchData(country);
		setGlobal({ data, country: country });
	};
	// console.log(state);

=======
>>>>>>> 2dfea000b56d1920b91132b366cd26d36ac1c406
	return (
		<BrowserRouter>
			<Static />
			<Footer />
		</BrowserRouter>
	)
}

export default App;
