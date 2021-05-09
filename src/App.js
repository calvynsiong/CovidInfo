import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Card, Chart, Country, Cover, Footer } from './components';
import { fetchCadData, fetchData } from './api';
import Static from "./components/Static";
import Fact from "./components/Fact";
import Info from "./components/Info";

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="light" expand={false}>
				<Navbar.Brand>
					<Link to="/">
						<img src="images/logo.svg" alt="Vaccine Info logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/fact">Fact Checks</Nav.Link>
							<Nav.Link href="/static">COVID Statics</Nav.Link>
							<Nav.Link href="/info">Get Vaccinated</Nav.Link>
							<h4 className="mt-4">PROVINCIAL INFO</h4>
							<Nav.Link href="/info/bc">British Columbia</Nav.Link>
							<Nav.Link href="/info/ab">Alberta</Nav.Link>
							<Nav.Link href="/info/sk">Saskatchewan</Nav.Link>
							<Nav.Link href="/info/mb">Manitoba</Nav.Link>
							<Nav.Link href="/info/on">Ontario</Nav.Link>
							<Nav.Link href="/info/qc">Quebec</Nav.Link>
							<Nav.Link href="/info/nb">New Brunswick</Nav.Link>
							<Nav.Link href="/info/ns">Nova Scotia</Nav.Link>
							<Nav.Link href="/info/pe">Prince Edward Island</Nav.Link>
							<Nav.Link href="/info/nl">Newfoundland & Labrador</Nav.Link>
							<Nav.Link href="/info/nt">Northwest Territories</Nav.Link>
							<Nav.Link href="/info/yt">Yukon</Nav.Link>
							<Nav.Link href="/info/nu">Nunavut</Nav.Link>
							<h4 className="mt-4">GENERAL INFO</h4>
							<Nav.Link href="#">Canada</Nav.Link>
							<Nav.Link href="#">WHO</Nav.Link>
						</Nav>
					</Navbar.Collapse>
			</Navbar>
			<Switch>
				<Route path="/fact">
					<Fact />
				</Route>
				<Route path="/static">
					<Static />
				</Route>
				<Route path="/info/:id">
					<Info />
				</Route>
				<Route path="/info">
					<Info />
				</Route>
				<Route path="/">
					<Fact />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}

export default App;
