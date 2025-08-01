/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/duck.glb --types --output components/landing/DuckModel.tsx 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    LOD3spShape: THREE.Mesh;
  };
  materials: {
    ["blinn3-fx"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/duck.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <PerspectiveCamera
          makeDefault={false}
          far={10000}
          near={1}
          fov={37.849}
          position={[400.113, 463.264, -431.078]}
          rotation={[-2.314, 0.566, 2.614]}
        />
        <mesh
          geometry={nodes.LOD3spShape.geometry}
          material={materials["blinn3-fx"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/duck.glb");
