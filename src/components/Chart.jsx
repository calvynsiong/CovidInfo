import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchCadData } from '../api';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { BsBarChartFill, BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";


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
								"#FF0000A6",
							"#FF8000A6",
							"#FFFF00A6",
							"#80FF00A6",
							"#00FF00A6",
							"#00FF80A6",
							"#00FFFFA6",
							"#0080FFA6",
							"#0000CDA6",
							"#8000FFA6",
							"#bc5090A6",
							"#FF0080A6",
							"#003f5cA6"
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
								"#FF0000A6",
							"#FF8000A6",
							"#FFFF00A6",
							"#80FF00A6",
							"#00FF00A6",
							"#00FF80A6",
							"#00FFFFA6",
							"#0080FFA6",
							"#0000CDA6",
							"#8000FFA6",
							"#bc5090A6",
							"#FF0080A6",
							"#003f5cA6"
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
								"#FF0000A6",
							"#FF8000A6",
							"#FFFF00A6",
							"#80FF00A6",
							"#00FF00A6",
							"#00FF80A6",
							"#00FFFFA6",
							"#0080FFA6",
							"#0000CDA6",
							"#8000FFA6",
							"#bc5090A6",
							"#FF0080A6",
							"#003f5cA6"
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
							"#FF0000A6",
							"#FF8000A6",
							"#FFFF00A6",
							"#80FF00A6",
							"#00FF00A6",
							"#00FF80A6",
							"#00FFFFA6",
							"#0080FFA6",
							"#0000CDA6",
							"#8000FFA6",
							"#bc5090A6",
							"#FF0080A6",
							"#003f5cA6"
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
								"#FF0000A6",
							"#FF8000A6",
							"#FFFF00A6",
							"#80FF00A6",
							"#00FF00A6",
							"#00FF80A6",
							"#00FFFFA6",
							"#0080FFA6",
							"#0000CDA6",
							"#8000FFA6",
							"#bc5090A6",
							"#FF0080A6",
							"#003f5cA6"
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
  
    

    return <section>
        <div className="chart-container">
				{/* Depending on whether or not a country is selected, the display chart state or the global line chart will be displayed */}
				{country ? displayChart : globalLineChart}

				<div className="btn-container">
					{/* EVent listeners that will change the chart */}
					<button onClick={switchToBarChart}> <BsBarChartFill></BsBarChartFill> </button>
					<button onClick={switchToPieChart}><BsFillPieChartFill/></button>
			</div>
			<h1 className="canadian-header">Canada's Vaccine Progress</h1>
            <div 
			className="chart-container horizontal">
                <div className="outline">
					<h2>Total Vaccines Administered in Canada</h2>
					{displayCadChart ? displayCadChart: <h1>Choose a graph</h1>}
					<div className="btn-container">
										{/* EVent listeners that will change the chart */}
										<button onClick={switchToCadBarChart}><BsBarChartFill></BsBarChartFill></button>
										<button onClick={switchToCadPieChart}><BsFillPieChartFill/></button>
										<button onClick={switchToCadLineChart}><AiOutlineLineChart/></button>
								</div>
				</div>
                <div className="outline">
					<h2>Daily Vaccines Administered in Canada</h2>
					{displayCadDailyChart?displayCadDailyChart: <h1>Choose a graph</h1>}
					<div className="btn-container">
										{/* EVent listeners that will change the chart */}
										<button onClick={switchToCadDailyBarChart}><BsBarChartFill></BsBarChartFill> </button>
										<button onClick={switchToCadDailyPieChart}><BsFillPieChartFill/></button>
										<button onClick={switchToCadDailyLineChart}><AiOutlineLineChart/></button>
								</div>
				</div>
            </div>
			</div>
    </section>;
};

export default Chart;
