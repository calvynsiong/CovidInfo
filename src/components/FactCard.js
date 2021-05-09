import React, { useState } from "react";
import { Button, Card, Col, Image, Row, Modal } from "react-bootstrap";

const FactCard = ({ fact }) => {
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Col sm="4" className="pb-4">
      <Card onClick={handleClick}>
        <div className="fact-card-category">{fact.category}</div>
        <Card.Img variant="top" src={fact.img} />
        <Card.Body className="d-flex">
          <p className="fact-card-icon">{fact.icon}</p>
          <p className="fact-card-text">{fact.myth}</p>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm="5">
              <Card>
                <div className="fact-card-category">{fact.category}</div>
                <Card.Img variant="top" src={fact.img} />
                <Card.Body className="d-flex">
                  <p className="fact-card-icon">{fact.icon}</p>
                  <p className="fact-card-text">{fact.myth}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h6 className="mb-3">{fact.title}</h6>
              {fact.content.map(p => <p>{p}</p>)}
              <a href={fact.url} target="blank"><p>Read more on this topic on {fact.provider} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p></a>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Col>
  );
}

export default FactCard;