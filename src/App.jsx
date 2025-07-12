import React from 'react';
    import { Canvas } from '@react-three/fiber';
    import { OrbitControls, useGLTF } from '@react-three/drei';
    import CellModel from './components/CellModel';
    import ControlPanel from './components/ControlPanel';

    function App() {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 p-4 bg-gray-100">
            <ControlPanel />
          </div>
          <div className="w-3/4">
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <CellModel />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      );
    }

    export default App;
