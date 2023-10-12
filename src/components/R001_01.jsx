/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 R001_01.glb --transform 
Files: R001_01.glb [2.99MB] > R001_01-transformed.glb [474.8KB] (84%)
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/R001_01-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="R001_01"
          geometry={nodes.R001_01.geometry}
          material={materials.R001_01}
          onPointerOver={(e) => {
            actions.rotate.setEffectiveTimeScale(0.1);
            actions.rotate.play();
          }}
          onPointerOut={(e) => actions.rotate.stop()}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/R001_01-transformed.glb");
