import React from 'react';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  return (
    <div className="container">
      <strong>This Live Update was built by Appflow</strong>
        <p>Shipped by Ionic
          <br/>
            <img src={`assets/appflow.png`} height="100px" alt="" />
            <img src={`assets/ionic.png`} height="100px" alt="" />
        </p>
    </div>
  );
};

export default ExploreContainer;
