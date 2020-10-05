import React from 'react';
import { Capacitor } from '@capacitor/core';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  const ciTrigger = process.env.REACT_APP_CI_TRIGGER || 'GitLab';
  const platform = Capacitor.getPlatform();
  const binaryType = platform === 'ios' ? 'IPA' : platform === 'android' ? 'APK' : 'website'
  return (
    <div className="container">
      <strong>This {binaryType} was built by Appflow</strong>
      { ciTrigger && (
        <p>Triggered by {ciTrigger}
          <br/>
            <img src={`assets/appflow.png`} height="100px" />
            <img src={`assets/${ciTrigger.toLowerCase()}.png`} height="100px" />
        </p>
      )}
    </div>
  );
};

export default ExploreContainer;
