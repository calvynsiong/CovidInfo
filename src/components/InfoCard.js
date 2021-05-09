import React from "react";

const InfoCard = ({ title, sub, body }) => {
  return (
    <div className="info-card-wraper">
      <div className="info-card-title jusify-content-center">
        <p>{title}</p>
      </div>
      <div className="info-card-main">
        <p className="info-card-sub">{sub}</p>
        <div className="info-card-body">
          {body}
        </div>
      </div>
    </div>
  )
}

export default InfoCard;