import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'



const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vUv = uv;

        vec3 pos = position;

        // Afinar a grama (triângulo fake)
        float width = mix(1.0, 0.0, uv.y);
        pos.x *= width;

        // Posição global da instância
        vec3 worldPos = (modelMatrix * instanceMatrix * vec4(pos, 1.0)).xyz;

        // Parâmetros do vento
        float windSpeed = 1.9;
        float windFrequency = 1.0;
        float windStrength = 0.3;

        // Onda se propagando no eixo X
        float wind =
            sin(
                uTime * windSpeed +
                worldPos.x * windFrequency
            );

        // Força maior no topo da grama
        pos.x += wind * windStrength * uv.y;

        gl_Position =
            projectionMatrix *
            modelViewMatrix *
            instanceMatrix *
            vec4(pos, 1.0);
    }

`

const fragmentShader = `
    varying vec2 vUv;

    void main() {
        vec3 baseColor = vec3(0.05, 0.5, 0.05); // verde bem escuro
        vec3 tipColor  = vec3(0.3, 1, 0.3); // verde forte no topo

        vec3 color = mix(baseColor, tipColor, vUv.y);

        gl_FragColor = vec4(color, 1.0);
    }
`


export function Grama({ count = 1200, position = [], larg = [] }) {
    const meshRef = useRef()

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const uniforms = useMemo(() => ({
        uTime: { value: 0 }
    }), [])

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    })

    useMemo(() => {
        return null
    }, [])


    React.useEffect(() => {
        for (let i = 0; i < count; i++) {
            dummy.position.set(
                (Math.random() - 0.5) * larg[0], // X
                larg[1],                          // Y (chão)
                (Math.random() - 0.5) * larg[2]  // Z
            )
            dummy.scale.setScalar(0.5 + Math.random() * 0.5)
            dummy.updateMatrix()
            meshRef.current.setMatrixAt(i, dummy.matrix)
        }
        meshRef.current.instanceMatrix.needsUpdate = true
    }, [count, dummy, larg])

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]} position={position}>
            <planeGeometry args={[0.2, 0.5, 1, 4]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
            />
        </instancedMesh>
    )
}