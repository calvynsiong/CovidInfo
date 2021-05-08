import React from 'react';
import CountUp from 'react-countup';



// Confirmed,recovered,deaths objects + lastUpdate date is destructured 
const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return <h1>Loading...</h1>;
    }
    return (
		<>
		
            <div><h1>Total Covid Statistics</h1></div>
            
        <div className="card">
        
            	<div className="grid infected">
				<h2>Infected</h2>
				<h3>
					{/* Implement a countup container imported that dynamicly filles the value with the confirmed value based on global/specific country */}
					Confimed cases: <CountUp
						start={0}
						end={confirmed.value}
						duration={2.5}
						separator=','
					/>
				</h3>
				{/* Uploads the date and converts the empty space spearators with a comma */}
					<p >Last update: {new Date(lastUpdate).toDateString().replace(" ", ", ")}</p>
			</div>
			<div className="grid recovered"> 
				<h2>Recovered</h2>
				<h3>Confirmed recoveries: <CountUp
						start={0}
						end={recovered.value}
						duration={2.5}
						separator=','
					/></h3>
				<p>Last update: {new Date(lastUpdate).toDateString().replace(" ", ", ")}</p>
			</div>
			<div className="grid deaths">
				<h2>Deaths</h2>
				<h3> Confirmed deaths: <CountUp
						start={0}
						end={deaths.value}
						duration={2.5}
						separator=','
					/></h3>
				<p>Last update: {new Date(lastUpdate).toDateString().replace(" ", ", ")}</p>
			</div>
            
        </div>
        </>
    )
}

export default Card
