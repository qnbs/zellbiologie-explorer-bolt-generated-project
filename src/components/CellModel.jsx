import React, { useRef } from 'react';
    import { useGLTF } from '@react-three/drei';

    function CellModel() {
      const { scene } = useGLTF('/models/cell.glb');
      return <primitive object={scene} />;
    }

    useGLTF.preload('/models/cell.glb');

    export default CellModel;
