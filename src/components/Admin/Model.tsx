import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group);

  console.log("animation:", animations);

  useEffect(()=>{
    actions.twitch_char6.play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <ambientLight intensity={0.5} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0.002, 0, 0]} rotation={[Math.PI / 2, 0, 0.5]} scale={0.06}>
          <group name="71befc7a795942eda13c8625345d5dbbfbx" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[-19.158, -1.254, 4.843]} rotation={[0, Math.PI / 2, 0]} scale={[0.558, 0.558, 1]} />
                  <group name="Object_8" position={[-19.158, -1.254, 4.843]} rotation={[0, Math.PI / 2, 0]} scale={[0.558, 0.558, 1]} />
                  <group name="hahmo" position={[-0.232, -1.16, 0]}>
                    <mesh name="hahmo_01_-_Default_0" geometry={nodes['hahmo_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
                  </group>
                  <group name="silmt_eyes" position={[-6.235, -10.221, 8.234]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="silmt_03_-_Default_0" geometry={nodes['silmt_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
                  </group>
                  <group name="jalat_bottom" position={[-4.323, -1.254, -4.638]} scale={[0.9, 0.9, 1]}>
                    <mesh name="jalat_07_-_Default_0" geometry={nodes['jalat_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
                  </group>
                  {/* <group name="Cylinder004" position={[0.165, -1.675, -5.125]}>
                    <mesh name="Cylinder004_08_-_Default_0" geometry={nodes['Cylinder004_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
                  </group> */}
                  {/* <group name="kdet" position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.558, 0.558, 1]} /> */}
                  <group name="Plane001" position={[21.576, 0, 24.973]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="Plane001_02_-_Default_0" geometry={nodes['Plane001_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
                  </group>
                  <group name="suu" position={[-0.335, -10.898, 5.505]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.244]}>
                    <mesh name="suu_03_-_Default_0" geometry={nodes['suu_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
                  </group>
                  {/* <group name="kdet_reuna" position={[-14.141, -1.254, 6.207]} rotation={[0, Math.PI / 2, 0]} scale={[0.558, 0.558, 1]} /> */}
                  <group name="hahmo_reunat" position={[-0.232, -1.16, 0]}>
                    <mesh name="hahmo_reunat_09_-_Default_0" geometry={nodes['hahmo_reunat_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
                  </group>
                  <group name="jalat_reunat" position={[-4.323, -1.254, -4.638]} scale={[0.9, 0.9, 1]}>
                    <mesh name="jalat_reunat_09_-_Default_0" geometry={nodes['jalat_reunat_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
                  </group>
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['07_-_Default']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['09_-_Default']} skeleton={nodes.Object_9.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
