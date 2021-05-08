import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const CadUrl = 'https://api.opencovid.ca/summary';

export const fetchCadData = async () => {
	try {
		// Destructure summary object from Cadurl
		const {
			data: { summary },
		} = await axios.get(`${CadUrl}`);
		const modifiedData = summary.map((dailyData) => {
			return {
				cumVaccine: dailyData.cumulative_avaccine,
				province: dailyData.province,
				aVaccine: dailyData.avaccine,
			};
		});
		// modifiedData.splice(11, 1);
		return modifiedData;
	} catch (error) {
		return error;
	}
};

export const fetchData = async (country) => {
	let changeableUrl = url;
	// If there is a country selected (in the form value), set the fetch url to be the specific country page
	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}
	try {
		// Destructure data section and the value in within (which  have objects values in within themselves except lastUpdate)

		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);
		// Further destructing to place in modifiedData to be passed in to App.js
		const modifiedData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
		// Passes the values of the 4 key/value pairs in the object down
		return modifiedData;
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async () => {
	try {
		// Grabs data from the daily case counts spanning 1 year back
		const { data } = await axios.get(`${url}/daily`);
		// Creates a new array that only contains the total deaths/confirmed cases and the date for the last year to be displayed on a chart
		const modifiedData = data.map((dailyData) => {
			return {
				confirmed: dailyData.confirmed.total,
				deaths: dailyData.deaths.total,
				date: dailyData.reportDate,
			};
		});
		return modifiedData;
	} catch (error) {
		return error;
	}
};

export const fetchCountries = async () => {
	try {
		// Destructures the countries key, which contains an array of all country objects
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);
		// Only return the names of each country in the array to be placed in the form
		return countries.map((country) => country.name);
	} catch (error) {
		return error;
	}
};
