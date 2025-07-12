import React from 'react';

    function ControlPanel() {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Steuerung</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Start</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Pause</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Stop</button>
        </div>
      );
    }

    export default ControlPanel;
