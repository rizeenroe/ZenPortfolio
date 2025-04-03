import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingCube = () => {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas style={{ position: 'absolute', top: '50px', left: '50px', width: '200px', height: '200px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
