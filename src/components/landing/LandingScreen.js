import React, { Component } from 'react';

import Toolbar from '../generic/Toolbar';
import LandingContent from './LandingContent';
import LandingBackground from './LandingBackground';
import MapErrorBoundary from '../generic/MapErrorBoundary';

export default class LandingScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Toolbar showTabs={false} />
        <LandingContent />
        <MapErrorBoundary>
          {
            (error) => {
              return <LandingBackground error={error} />
            }
          }
        </MapErrorBoundary>
      </div>
    );
  }
}
