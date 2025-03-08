import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingCube from './FloatingCube';

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#3DD2F0" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#5D9EF0" />
          <FloatingCube />
          <fog attach="fog" args={['#0B0F17', 5, 15]} />
        </Suspense>
      </Canvas>
    </div>
  );
}