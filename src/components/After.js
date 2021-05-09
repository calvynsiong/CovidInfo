import div from "react";
import { Col, Row } from "react-bootstrap";
import InfoCard from "./InfoCard";

const After = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p className="text-center mb-5">
      Here are some of the protocol advised by public health authorities to follow after getting your vaccination:
      </p>

      <h6 className="info-accent-text">You can start to do the following:</h6>
      <Row className="info-box">
        <Col>
          <p>Gather indoors with fully vaccinated people or unvaccinated people of any age from one other household without masks or staying 6 feet apart</p>
          <p><small><strong>
          unless any of those people or anyone they live with, have an increased risk for severe illness from COVID-19.
          </strong></small></p>
        </Col>
        <Col>
          <p>If you have been around others with COVID-19, you do not need to stay away from others or get tested</p>
          <p><small><strong>
          However, you should get tested if you show symptoms or if you live in a group setting, and are around someone who has COVID-19 even if you show no symptoms
          </strong></small></p>
        </Col>
      </Row>

      <h6 className="info-accent-text">If you’re planning to travel: </h6>
      <Row className="info-box">
        <ul>
          <li>
            If you travel in the USA, you do not need to get tested before or after travel or self-quarantine after travel
          </li>
          <li>
            Ensure you pay close attention to the COVID-19 situation at any intrnational destinations before travelling outside the USA
            <ul>
              <li>
                You do <strong>not</strong> need to get tested <strong>before</strong> leaving the USA unless required by your destination
              </li>
              <li>
                You still need to show a negative test result or documentation of recovery from COVID-19 <strong>before</strong> boarding internation flights to the USA
              </li>
              <li>
                You should still get tested 3-5 days <strong>after</strong> international travel
              </li>
              <li>
                You do <strong>not</strong> need to self-quarantine <strong>after</strong> arriving in the US
              </li>
            </ul>
          </li>
        </ul>
      </Row>

      <h6 className="info-accent-text">You can start to do the following:</h6>
      <Row className="info-box">
        <Col>
          <ul>
            <li>Protecting yourself and others by wearing a mask <br/>(especially when travelling)</li>
            <li>Avoid large indoor gatherings</li>
            <li>Monitoring for symptoms of COVID-19</li>
            <li>Following the rules of your workplace</li>
          </ul>
        </Col>
        <Col className="d-flex align-content-center">
          <p className="accent-text info-icon-text"><i class="fa fa-info-circle" aria-hidden="true"></i></p>
        </Col>
      </Row>
    </div>
  )
}

export default After;