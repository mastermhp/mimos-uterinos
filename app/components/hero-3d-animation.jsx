"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
  Text3D,
  Float,
  Sparkles,
  MeshDistortMaterial,
  Html,
  SoftShadows,
} from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useSpring, a } from "@react-spring/three"
import { useMediaQuery } from "../hooks/use-mobile"

// Cycle phases with colors
const cyclePhases = [
  { name: "Menstrual", color: "#ec4899", position: [-4, 0, 0], days: "1-5" },
  { name: "Follicular", color: "#f59e0b", position: [-1, 0, 0], days: "6-13" },
  { name: "Ovulation", color: "#10b981", position: [1.5, 0, 0], days: "14-15" },
  { name: "Luteal", color: "#8b5cf6", position: [4, 0, 0], days: "16-28" },
]

// Mobile cycle phases with adjusted positions
const mobileCyclePhases = [
  { name: "Menstrual", color: "#ec4899", position: [0, 2, 0], days: "1-5" },
  { name: "Follicular", color: "#f59e0b", position: [0, 0.5, 0], days: "6-13" },
  { name: "Ovulation", color: "#10b981", position: [0, -1, 0], days: "14-15" },
  { name: "Luteal", color: "#8b5cf6", position: [0, -2.5, 0], days: "16-28" },
]

// Animated sphere representing a phase
function PhaseOrb({ position, color, name, days, index, active, setActive, isMobile }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const isActive = active === index

  // Use react-spring for animations instead of framer-motion-3d
  const { scale } = useSpring({
    scale: isActive ? (isMobile ? 1.1 : 1.2) : hovered ? (isMobile ? 1.05 : 1.1) : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  })

  useFrame((state) => {
    if (meshRef.current) {
      // Different animation for mobile vs desktop
      if (isMobile) {
        meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2
      } else {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2
      }
    }
  })

  // Adjust size based on mobile
  const sphereSize = isMobile ? 0.6 : 0.8
  const labelPosition = isMobile ? [1.5, 0, 0] : [0, -1.5, 0]
  const sparklesScale = isMobile ? 2 : 3

  return (
    <group position={position}>
      <a.mesh
        ref={meshRef}
        scale={scale}
        onClick={() => setActive(index)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[sphereSize, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={5}
          distort={isActive ? 0.4 : 0.2}
          radius={1}
          factor={0.4}
          transparent
          opacity={0.9}
        />

        {/* Glow effect */}
        <mesh scale={1.2}>
          <sphereGeometry args={[sphereSize, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
        </mesh>
      </a.mesh>

      {/* Label */}
      <Html position={labelPosition} center transform>
        <div className={`text-center transition-all duration-300 ${isActive ? "scale-110" : "scale-100"}`}>
          <div className={`font-bold ${isMobile ? "text-sm" : "text-lg"}`} style={{ color }}>
            {name}
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} opacity-80`}>Days {days}</div>
        </div>
      </Html>

      {isActive && <Sparkles count={50} scale={sparklesScale} size={4} speed={0.4} color={color} />}
    </group>
  )
}

// Connection between phases
function Connection({ start, end, color, isMobile }) {
  // Calculate the midpoint and distance between start and end
  const midX = (start[0] + end[0]) / 2
  const midY = (start[1] + end[1]) / 2
  const midZ = (start[2] + end[2]) / 2

  // Calculate distance between points
  const distance = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2) + Math.pow(end[2] - start[2], 2),
  )

  // Calculate rotation to point cylinder from start to end
  let rotationX = 0
  const rotationY = 0
  let rotationZ = 0

  if (isMobile) {
    // For vertical connections (mobile)
    rotationX = Math.PI / 2
    if (end[1] < start[1]) {
      rotationX = -Math.PI / 2
    }
  } else {
    // For horizontal connections (desktop)
    rotationZ = Math.PI / 2
    if (end[0] < start[0]) {
      rotationZ = -Math.PI / 2
    }
  }

  return (
    <mesh position={[midX, midY, midZ]}>
      <cylinderGeometry
        args={[
          0.03, // Thinner for mobile
          0.03,
          distance,
          8,
        ]}
      />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
      <group rotation={[rotationX, rotationY, rotationZ]} />
    </mesh>
  )
}

// Floating particles
function Particles({ count = 100, color = "#ec4899", isMobile }) {
  const mesh = useRef()
  const particleCount = isMobile ? Math.floor(count / 2) : count // Fewer particles on mobile

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05
      mesh.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <group ref={mesh}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * (isMobile ? 6 : 10),
            (Math.random() - 0.5) * (isMobile ? 6 : 10),
            (Math.random() - 0.5) * (isMobile ? 6 : 10),
          ]}
        >
          <sphereGeometry args={[0.02 + Math.random() * 0.05, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.5 + Math.random() * 0.5} />
        </mesh>
      ))}
    </group>
  )
}

// Animated info panel using CSS transitions instead of framer-motion
function InfoPanel({ isMobile }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Html position={[0, isMobile ? -3 : 0, 2]} center>
      {/* <div
        className={`bg-white/90 dark:bg-slate-900/90 p-4 sm:p-6 rounded-xl shadow-xl backdrop-blur-sm max-w-[280px] sm:max-w-md transition-all duration-500 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Understand Your Cycle
        </h2>
        <p className="mb-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
          Track and visualize your menstrual cycle with our AI-powered app. Get personalized insights and predictions.
        </p>
        <div className="flex gap-2 sm:gap-3">
          <Link href="/signup">
            <Button className="text-xs sm:text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              Get Started
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </Link>
          <Link href="/demo/user">
            <Button variant="outline" className="text-xs sm:text-sm">
              Try Demo
            </Button>
          </Link>
        </div>
      </div> */}
    </Html>
  )
}

// Animated 3D text using react-spring instead of framer-motion
function AnimatedText({ isMobile }) {
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1 + 3
    }
  })

  return (
    <group ref={textRef}>
      {/* <Text3D font="/fonts/Inter_Bold.json" size={isMobile ? 0.6 : 0.8} height={0.1} curveSegments={12}>
        CycleSync
        <meshStandardMaterial color="#ec4899" />
      </Text3D> */}
    </group>
  )
}

// Main 3D scene
function CycleScene({ isMobile }) {
  const [active, setActive] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  // Use the appropriate phase layout based on device
  const phases = isMobile ? mobileCyclePhases : cyclePhases

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfo(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SoftShadows />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Cycle phases */}
      {phases.map((phase, index) => (
        <PhaseOrb
          key={index}
          position={phase.position}
          color={phase.color}
          name={phase.name}
          days={phase.days}
          index={index}
          active={active}
          setActive={setActive}
          isMobile={isMobile}
        />
      ))}

      {/* Connections between phases */}
      {phases.map((phase, index) => {
        if (index < phases.length - 1) {
          return (
            <Connection
              key={index}
              start={phase.position}
              end={phases[index + 1].position}
              color={phase.color}
              isMobile={isMobile}
            />
          )
        }
        return null
      })}

      {/* Connect last to first to complete the cycle */}
      <Connection
        start={phases[phases.length - 1].position}
        end={phases[0].position}
        color={phases[phases.length - 1].color}
        isMobile={isMobile}
      />

      {/* Floating text */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <AnimatedText isMobile={isMobile} />
      </Float>

      {/* Ambient particles */}
      <Particles count={isMobile ? 100 : 200} isMobile={isMobile} />

      {/* Info panel */}
      {showInfo && <InfoPanel isMobile={isMobile} />}

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />

      <Environment preset="sunset" />
    </>
  )
}

export default function SimplifiedHero3D() {
  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      <Canvas
        shadows
        camera={{
          position: isMobile ? [0, 0, 12] : [0, 0, 10],
          fov: isMobile ? 50 : 45,
        }}
      >
        <CycleScene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
