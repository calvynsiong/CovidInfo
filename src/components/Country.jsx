import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../api';

// Destructures the function that can change the data state's values based on country
const Country = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    
    	// On render, change the state into the array of each country name (192 countries)
	useEffect(() => {
        const fetchApi = async () => {
			setCountries(await fetchCountries());
		};
		fetchApi();
	}, []);



	return <>
		<h1>Select a Country</h1>
        <FormControl margin="none">
            {/* Added an event listener that uses the country from the input value as the argument passed down the country change option */}
			<NativeSelect defaultValue="" variant="filled" onChange={(e) => handleCountryChange(e.target.value)}>
				{/* Default value is global */}
				<option value="">Global</option>
				{/* Creates an option for each country in the array and gives it a unique key based on array index */}
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    
    
    
    </>;
};

export default Country;
