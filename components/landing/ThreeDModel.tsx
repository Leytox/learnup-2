"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { Model } from "./DuckModel";
import { Suspense } from "react";
import RotatingText from "../rotating-text";
import ClickSpark from "../click-spark";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ThreeDModel = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 w-full h-60 flex justify-center items-center">
      <ClickSpark>
        <div className="container mx-auto flex justify-center items-center max-md:flex-col">
          <h1 className="text-4xl font-bold w-full text-center flex items-center justify-center gap-2">
            Happy{" "}
            <RotatingText
              texts={["coding!", "learning!", "drawing!"]}
              className="bg-green-700 p-2 rounded-md"
              rotationInterval={5000}
              staggerDuration={0.1}
            />
          </h1>
          <Tooltip>
            <TooltipTrigger asChild>
              <Canvas shadows camera={{ fov: 21 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                  />
                  <Environment preset="sunset" />
                  <Center>
                    <Model />
                  </Center>
                  <OrbitControls
                    autoRotate
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 2.5}
                  />
                </Suspense>
              </Canvas>
            </TooltipTrigger>
            <TooltipContent>
              <p>We are not ducking around 🔫🦆</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </ClickSpark>
    </section>
  );
};

export default ThreeDModel;
