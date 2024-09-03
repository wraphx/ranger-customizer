import { Suspense,  } from "react";
import { Canvas,  } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls, Loader } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { Ranger } from "./vehicles/Ranger";

export default function App() {

  return (

    <CustomizationProvider>
      <div className="App">
      <Loader />
        <Canvas  camera={{ position: [0, 0, 20], fov:40 }}>
          
          <Suspense fallback={null}>
          <Ranger scale={6} position={[0, 0, 0]} />
          </Suspense>
          <hemisphereLight intensity={2.5} />
          <ContactShadows position={[0, 0, 0.0]} opacity={0.75} scale={15} blur={2.5} far={0.8} />
          <ContactShadows resolution={1024} frames={1} position={[0, 0, 0]} scale={19} blur={0.5} opacity={0.5} far={20} />
          
          <ambientLight intensity={3.7} />
          

          {/* <Environment preset="city" /> */}
          <Environment resolution={1024} files="/future_parking_2k.hdr" background ground={{ height: 15, radius: 80, scale: 50 }} backgroundBlurriness={50} backgroundIntensity={40}  environmentIntensity={40}>
           
          </Environment>
          
          {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls    enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

