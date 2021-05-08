import React, { useState, useEffect } from 'react';
import { Card, Chart, Country, Cover, Footer } from './components';
import { fetchCadData, fetchData } from './api';

function App() {
	const [global, setGlobal] = useState({ data: {}, country: '' });
	const [CadState, setCadState] = useState({ Canada: {} });

	// Load Canadian data (cumulative_vaccines, daily_vaccs, province)
	useEffect(() => {
		async function componentDidMount() {
			const Canada = await fetchCadData();
			console.log('====================================');
			console.log(Canada);
			console.log('====================================');
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

	return (
		<>
			<Cover></Cover>
		<main className='container'>
			{/* Pass in an object with confirmed cases, recoveries, deaths */}
			<Card data={global.data}></Card>
			{/* Country picker gets passed the function that sets the country and it's corresponding data */}
			<Country handleCountryChange={handleCountryChange}></Country>
			{/* Chart gets passed the country and it's corresponding data directly for display (The country is altered by the handleCountryChange function) */}

			<Chart
				data={global.data}
				country={global.country}
					Canada={CadState}></Chart>
			<Footer></Footer>
			</main>
			</>
	);
}

export default App;
