import React from 'react';

import VideoColumn from './VideoColumn';
import TranscriptColumn from './TranscriptColumn';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <VideoColumn />
      </div>
      <div className="col-6">
        <TranscriptColumn />
      </div>
    </div>
  </div>
);

export default App;
