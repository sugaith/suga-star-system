import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <>
      <Canvas
        // onCreated={state => state.gl.setClearColor("red")}
        camera={{ position: [0, 300, 0], fov: 120 }}
      >
        <color attach="background" args={['green']} />

        <mesh> </mesh>
        <Suspense fallback={null}>
          <ambientLight intensity={18} color={'#1fa8f4'} />
        </Suspense>
      </Canvas>
    </>
  )
}
