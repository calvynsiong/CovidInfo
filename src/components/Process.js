import React from "react";
import { Col, Row } from "react-bootstrap";
import InfoCard from "./InfoCard";

const Process = ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <Row>
        <p className="text-center">
        Getting the COVID-19 vaccine is just like getting any other shot. Here’s what you can expect on the day of:
        </p>
      </Row>
      <Row className="d-flex">
        <Col sm="4">
          <InfoCard 
            title="Before your visit"
            sub="Get ready for your appointment"
            body={(<ul>
                {["Be ready to show ID such as your health card",
                  "Wear a short-sleeved shirt and a mask",
                  "Arrive a few minutes before your appointment time",
                  "You can bring one person with you for support",
                  "All clinics are wheelchair accessible",
                  "Masks will be provided if necessary"]
                  .map(l => (
                <li>{l}</li>
              ))}
              </ul>)}
          />
        </Col>
        <Col sm="4">
          <InfoCard 
            title="During your appointment"
            sub="You’ll be at the clinic for 30-60 minutes total"
            body={(<ul>
                {["Complete a check-in process",
                  "Get your vaccine dose (The best vaccine is the one avaialble to you).",
                  "Wait in an observation area for 15 minutes so you will be in a safe space if preventative care is required."]
                  .map(l => (
                <li>{l}</li>
              ))}
              </ul>)}
          />
        </Col>
        <Col sm="4">
          <InfoCard 
            title="After your vaccination"
            sub="Keep your records safe  for your 2nd dose."
            body={(<span><ul>
                {["You should not receive any other vaccines until 14 days after a dose of COVID-19 vaccine",
                  "Continue to follow provincial health orders, for the safety of everybody"]
                  .map(l => (
                <li>{l}</li>
              ))}
              </ul>
              <a href="https://globalnews.ca/news/7769047/what-canadians-can-do-covid-vaccination/" target="_blank">
                <p className="mt-3">
                  <strong>Check out what you’re allowed to do after getting vaccinated</strong>
                </p>
              </a>
              </span>)}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Process;