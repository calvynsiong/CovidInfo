import React from "react";
import { Row } from "react-bootstrap";

import FactCard from "./FactCard";

const FactCards = ({ facts }) => {
  return (
    <Row>
      {facts.map(f => <FactCard key={f.myth} fact={f} />)}
    </Row>
  )
}

export default FactCards;