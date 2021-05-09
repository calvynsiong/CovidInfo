import React from "react";
import { Col, Row } from "react-bootstrap";
import InfoCard from "./InfoCard";

const Booking = ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <Row>
        <p className="text-center">
          {data.province}'s vaccination plan follows {Object.keys(data.phases).length}-stages. 
          <span className="accent-text"> We're corrently in {data.current}</span>
        </p>
      </Row>
      <Row className="d-flex">
        {data.phases.map(p => (
          <Col sm={12/data.phases.length}>
            <InfoCard 
              title={p.desc}
              sub={p.target}
              body={(<ul>
                {p.groups.map(l => (
                <li>{l}</li>
              ))}
              </ul>)}
            />
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <p>
          If you qualify for a vaccination, 
          <span className="accent-text"> book your appointment today</span>
        </p>
      </Row>
    </React.Fragment>
  )
}

export default Booking;