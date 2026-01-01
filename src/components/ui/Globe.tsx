'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { globePoints, latLngToVector3, globeConfig } from '@/lib/globe-data';

// Atmosphere component with glow effect
function Atmosphere() {
    return (
        <Sphere args={[globeConfig.atmosphereRadius, 64, 64]}>
            <meshBasicMaterial
                color={globeConfig.atmosphereColor}
                transparent
                opacity={0.1}
                side={THREE.BackSide}
            />
        </Sphere>
    );
}

// Point cloud markers
function GlobePoints() {
    const pointsRef = useRef<THREE.Group>(null);

    const points = useMemo(() => {
        return globePoints.map((point) => {
            const pos = latLngToVector3(point.lat, point.lng, globeConfig.radius);
            return {
                position: new THREE.Vector3(pos.x, pos.y, pos.z),
                color: point.color,
                size: point.size * globeConfig.pointScale,
            };
        });
    }, []);

    return (
        <group ref={pointsRef}>
            {points.map((point, index) => (
                <mesh key={index} position={point.position}>
                    <sphereGeometry args={[point.size, 16, 16]} />
                    <meshBasicMaterial
                        color={point.color}
                        transparent
                        opacity={0.9}
                    />
                    {/* Glow effect */}
                    <mesh scale={1.5}>
                        <sphereGeometry args={[point.size, 16, 16]} />
                        <meshBasicMaterial
                            color={point.color}
                            transparent
                            opacity={0.3}
                        />
                    </mesh>
                </mesh>
            ))}
        </group>
    );
}

// Main globe sphere
function GlobeSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Auto-rotation
    useFrame((state, delta) => {
        if (meshRef.current && globeConfig.autoRotate) {
            meshRef.current.rotation.y += globeConfig.rotationSpeed;
        }
    });

    return (
        <Sphere ref={meshRef} args={[globeConfig.radius, 128, 128]}>
            <meshPhongMaterial
                color={globeConfig.globeColor}
                emissive="#0a0f2e"
                emissiveIntensity={0.2}
                shininess={10}
                transparent
                opacity={0.95}
            />
        </Sphere>
    );
}

// Main Globe component
export function Globe() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />

            {/* Globe elements */}
            <Atmosphere />
            <GlobeSphere />
            <GlobePoints />

            {/* Controls */}
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={4}
                maxDistance={15}
                autoRotate={globeConfig.autoRotate}
                autoRotateSpeed={globeConfig.autoRotateSpeed}
                rotateSpeed={0.5}
                dampingFactor={0.05}
                enableDamping
            />
        </>
    );
}
