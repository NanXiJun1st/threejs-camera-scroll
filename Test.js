/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/test.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="空物体">
          <PerspectiveCamera name="摄像机" makeDefault={false} far={1000} near={0.1} fov={22.9} rotation={[0.5, 0.32, 0.46]} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[-1.45, 3.31, -5.43]} />
        <mesh name="猴头" geometry={nodes.猴头.geometry} material={nodes.猴头.material} position={[-2.65, 5.66, 6.89]} />
        <mesh name="棱角球" geometry={nodes.棱角球.geometry} material={nodes.棱角球.material} position={[-4.72, 5.54, 0.02]} />
        <mesh name="球体" geometry={nodes.球体.geometry} material={nodes.球体.material} position={[2.47, 3.28, 9.67]} />
      </group>
    </group>
  )
}

useGLTF.preload('/test.glb')
