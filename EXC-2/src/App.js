import React, { useState } from 'react';
import './App.css';
import CameraSelection from './CameraSelection/camera-selection'
import CameraView from './CameraView/camera-view'

const App = () => {

  // Create useState to store our camera selection
  const [select, setSelect] = useState(undefined);

  return (
    <div className="app">
      <div className="app-header">
        {/* Header */}
        <h2>Traffic Camera Viewer - Joensuu/Lieksa</h2>
      </div>
      {/* Camera selector */}
      <CameraSelection
        selectedPresetId={select}
        onSelect={(val) => setSelect(val)}
      />
      {/* Display selected camera */}
      {select ?
        <div className="camera-container">
          <CameraView presetId={select} />
        </div>
        : null
      }
    </div>
  );
}

export default App;