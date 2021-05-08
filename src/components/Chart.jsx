import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchCadData } from '../api';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Destructured confirmed, recovered and deaths which are objects in themselves + array of countries
const Chart = ({
	data: { confirmed, recovered, deaths },
	country,
	Canada: { Canada },
}) => {



	// Initializes Canadian Data with the fetched url
	const [province, setProvince] = useState([]);
	const [cumVaccine, setCumVaccine] = useState([]);
    const [dailyVaccine, setDailyVaccine] = useState([]);

    console.log(Canada);
    
    useEffect(() => {
		async function componentDidMount() {
			const Canada = await fetchCadData();
			Canada.splice(11, 1);
			setProvince(Canada.map((province) => province.province));
            setCumVaccine(Canada.map((province) => province.cumVaccine));
            setDailyVaccine(Canada.map((province) => province.aVaccine
            ))
		}
		componentDidMount();
    }, []);
     	const CadDailyBarChart = confirmed ? (
		<Bar
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							"#FF0000",
							"#FF8000",
							"#FFFF00",
							"#80FF00",
							"#00FF00",
							"#00FF80",
							"#00FFFF",
							"#0080FF",
							"#0000CD",
							"#8000FF",
							"#9400D3",
							"#FF0080",
						],
						data: dailyVaccine,
					},
				],
			}}
		/>
	) : null;
	const CadDailyPieChart = confirmed ? (
		<Pie
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							"#FF0000",
							"#FF8000",
							"#FFFF00",
							"#80FF00",
							"#00FF00",
							"#00FF80",
							"#00FFFF",
							"#0080FF",
							"#0000CD",
							"#8000FF",
							"#9400D3",
							"#FF0080",
						],
						data: dailyVaccine,
					},
				],
			}}
		/>
	) : null;
	const CadDailyLineChart = confirmed ? (
		<Line
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							"#FF0000",
							"#FF8000",
							"#FFFF00",
							"#80FF00",
							"#00FF00",
							"#00FF80",
							"#00FFFF",
							"#0080FF",
							"#0000CD",
							"#8000FF",
							"#9400D3",
							"#FF0080",
						],
						data: dailyVaccine,
					},
				],
			}}
		/>
	) : null;
    
    	const CadBarChart = confirmed ? (
		<Bar
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							"#FF0000",
							"#FF8000",
							"#FFFF00",
							"#80FF00",
							"#00FF00",
							"#00FF80",
							"#00FFFF",
							"#0080FF",
							"#0000CD",
							"#8000FF",
							"#9400D3",
							"#FF0080",
						],
						data: cumVaccine,
					},
				],
			}}
		/>
	) : null;
	const CadPieChart = confirmed ? (
		<Pie
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							"#FF0000",
							"#FF8000",
							"#FFFF00",
							"#80FF00",
							"#00FF00",
							"#00FF80",
							"#00FFFF",
							"#0080FF",
							"#0000CD",
							"#8000FF",
							"#9400D3",
							"#FF0080",
						],
						data: cumVaccine,
					},
				],
			}}
		/>
	) : null;
	const CadLineChart = confirmed ? (
		<Line
			data={{
				labels: province,

				datasets: [
					{
						label: 'All',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)',
						],
						data: cumVaccine,
					},
				],
			}}
		/>
	) : null;

	// Set daily data to an empty array
	const [dailyData, setDailyData] = useState([]);

	// When loaded, fetch renewed info from api and set the dailyData state to be an array with global confirmed/recovery/ date values as an object in each array entry
	useEffect(() => {
		async function fetchApi() {
			const dailyData = await fetchDailyData();
			setDailyData(dailyData);
		}
		fetchApi();
		// Only rerenders when country changes
	}, [country]);
	// console.log('====================================');
	// console.log(dailyData);
	// console.log('====================================');

	// Initializing a pie chart with Chart js, and only display it when the confirmed values exist (it won't be there immediately)
	const pieChart = confirmed ? (
		<Pie
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'All',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
		/>
	) : null;
	// Initializing bar chart

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'All',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
		/>
	) : null;
	// Initializing global line chart for default, which only shows if the daily data contains everything
	const globalLineChart = dailyData.length ? (
		<Line
			data={{
				// Creates an array of labels based on each date in daily data (date is destructured in each entry) because each entry looks like:  {confirmed: 557, deaths: 17, date: "2020-01-22"}
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						// Confirmed and death values are destructured and mapped for each date
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Deaths',
						backgroundColor: 'rgba(255,0,0,0.5)',
						borderColor: 'red',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	// Set a state for display charts that can be changed
	const [displayChart, setDisplayChart] = useState(null);
    const [displayCadChart, setDisplayCadChart] = useState(CadBarChart);
    const [displayCadDailyChart, setDisplayCadDailyChart] = useState(CadDailyBarChart);

	// Rerenders the chart component everytime the confirmed value of the country switches + defaults to bar chart
	useEffect(() => {
        setDisplayChart(barChart)
    }, [confirmed]);


    
	// Initializing functions to switch charts
	const switchToPieChart = () => {
		setDisplayChart(pieChart);
	};
	const switchToBarChart = () => {
		setDisplayChart(barChart);
    };
    

	const switchToCadPieChart = () => {
		setDisplayCadChart(CadPieChart);
	};
	const switchToCadBarChart = () => {
		setDisplayCadChart(CadBarChart);
	};
	const switchToCadLineChart = () => {
		setDisplayCadChart(CadLineChart);
    };
    


	const switchToCadDailyPieChart = () => {
		setDisplayCadDailyChart(CadDailyPieChart);
	};
	const switchToCadDailyBarChart = () => {
		setDisplayCadDailyChart(CadDailyBarChart);
	};
	const switchToCadDailyLineChart = () => {
		setDisplayCadDailyChart(CadDailyLineChart);
	};
  
    

    return <div>
        <div className="chart-container">
				{/* Depending on whether or not a country is selected, the display chart state or the global line chart will be displayed */}
				{country ? displayChart : globalLineChart}

				<div className="btn-container">
					{/* EVent listeners that will change the chart */}
					<button onClick={switchToBarChart}>Bar Chart</button>
					<button onClick={switchToPieChart}>Pie Chart</button>
            </div>
            <div className="chart-container">
                <h2>Total Vaccines administered in Canada</h2>
                {displayCadChart ? displayCadChart: <h1>Choose a graph</h1>}
                <div className="btn-container">
					{/* EVent listeners that will change the chart */}
					<button onClick={switchToCadBarChart}>Bar Chart</button>
					<button onClick={switchToCadPieChart}>Pie Chart</button>
					<button onClick={switchToCadLineChart}>Line Chart</button>
            </div>
                <h2>Daily Vaccines administered in Canada</h2>
                {displayCadDailyChart?displayCadDailyChart: <h1>Choose a graph</h1>}
                <div className="btn-container">
					{/* EVent listeners that will change the chart */}
					<button onClick={switchToCadDailyBarChart}>Bar Chart</button>
					<button onClick={switchToCadDailyPieChart}>Pie Chart</button>
					<button onClick={switchToCadDailyLineChart}>Line Chart</button>
            </div>
            </div>
			</div>
    </div>;
};

export default Chart;
