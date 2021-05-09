import React from 'react';
import { Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Row>
                <Col sm="12" md="4" lg="2" className="mr-auto">
                    <img src="/images/logo.svg" alt="vaccine info logo" 
                         className="mb-2"
                    />
                    <p className="mt-5 mb-5">
                        Made by Michelle Swolfs, Nathan Lew,<br /> Calvyn Siong, Juneau Lim
                    </p>
                </Col>
                <Col sm="12" md="3" lg="2" className="mb-2">
                    <p>PRODUCT</p>
                    <Link to="/fact"><p>Fact Checks</p></Link>
                    <Link to="/static"><p>COVID Statistics</p></Link>
                    <Link to="/info"><p>Get Vaccinated</p></Link>
                    <p className="mt-2 mb-0">GENERAL INFO</p>
                    <p><a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html" target="_blank" rel="noreferrer">
                        Government of Canada
                    </a></p>
                    <p><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noreferrer">
                        World Health Organization
                    </a></p>
                </Col>
                <Col sm="12" md="4">
                    <p>PROVINCIAL COVID-19 INFORMATION</p>
                    <Row>
                        <Col>
							<Nav.Link href="/info/bc">British Columbia</Nav.Link>
							<Nav.Link href="/info/ab">Alberta</Nav.Link>
							<Nav.Link href="/info/sk">Saskatchewan</Nav.Link>
							<Nav.Link href="/info/mb">Manitoba</Nav.Link>
							<Nav.Link href="/info/on">Ontario</Nav.Link>
							<Nav.Link href="/info/qc">Quebec</Nav.Link>
							<Nav.Link href="/info/nb">New Brunswick</Nav.Link>
                        </Col>
                        <Col>
							<Nav.Link href="/info/ns">Nova Scotia</Nav.Link>
							<Nav.Link href="/info/pe">Prince Edward Island</Nav.Link>
							<Nav.Link href="/info/nl">Newfoundland & Labrador</Nav.Link>
							<Nav.Link href="/info/nt">Northwest Territories</Nav.Link>
							<Nav.Link href="/info/yt">Yukon</Nav.Link>
							<Nav.Link href="/info/nu">Nunavut</Nav.Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
