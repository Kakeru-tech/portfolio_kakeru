import React, { Suspense, useEffect, useState } from "react";
// canvas is a place that allows us to put something on it 
import { Canvas } from "@react-three/fiber";
//useGLTF allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
//loading sign's functional component
import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {

  // import 3d object
  const computer = useGLTF('./desktop_pc/scene.gltf')

  // when creating 3d object, use [mesh], not [div]
  return (
    <mesh>

      {/* lights */}
      <hemisphereLight intensity={0.1} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024} />


      {/* 3d object configuration */}
      <primitive object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Checking if the current device size is lower than 500 of width
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px');
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the modia query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // Add the callback function as a listener for changes to the media query
    const eventListener = mediaQuery.addEventListener('change',
      handleMediaQueryChange);

    return () => {
      eventListener;
    }
  }, [])


  return (
    <Canvas
      frameloop="demand"
      shadows
      // where the camera coming from: position:[x,y,z]
      //fov: field of view
      camera={{ position: [20, 3, 5], fov: 25 }}
      // to properly render the model
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* suppense allows us to have a loader while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows us to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>
  )
}


export default ComputersCanvas;
