import React, { useEffect } from 'react';
import '../Portfolio.Component.scss';
const PortfolioSubtitle = (props) => {
  return (
    <div>
      <h2 className="subtitle">{props.name}</h2>
    </div>
  );
};
export default PortfolioSubtitle;
