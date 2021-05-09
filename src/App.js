import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Card, Chart, Country, Cover, Footer } from './components';
import { fetchCadData, fetchData } from './api';
import Static from "./components/Static";

function App() {
	return (
		<BrowserRouter>
			<Static />
			<Footer />
		</BrowserRouter>
	)
}

export default App;
