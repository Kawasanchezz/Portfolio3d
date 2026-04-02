import { KeyboardControls, OrbitControls, PerformanceMonitor, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Grama } from './components/Grama'
import { MobileControls } from './components/MobileControls'
import { MagicMissionCircle } from './components/CirculoMagico'
import { Placas } from './components/Placas'
import { Renders } from './components/Renders'
import { Barreiras } from './components/Barreiras'
import { Player } from './components/Player'
import { Menu } from './components/menu/Menu'
import { MenuSobre } from './components/portfolio/sobre/MenuSobre'
import { MenuProjetos } from './components/portfolio/projetosLayout/MenuProjetos'
import { MenuContato } from './components/portfolio/contato/MenuContato'
import { DetectGpu } from './components/DetectGpu'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projeto } from './projetosPortfolio/Projetos'
import { ChatIA } from './projetosPortfolio/ChatIA'
import { TerrainPlane } from './Mapa'
import { LojaDeOculos } from './projetosPortfolio/LojaDeOculos'
import { AppDieta } from './projetosPortfolio/AppDieta'
import { RedeSocial } from './projetosPortfolio/RedeSocial'




const Controls = {
  forward: "forward",
  backward: "backward",
  left: "left",
  right: "right",
}

const presets = {
  mobile: {
    dpr: 1.5,
    shadows: false,
    bloom: false,
    grass: 1400,
    sparkles: 5
  },
  low: {
    dpr: 1,
    shadows: false,
    bloom: false,
    grass: 800,
    sparkles: 5
  },
  medium: {
    dpr: 1.25,
    shadows: false,
    bloom: true,
    grass: 1400,
    sparkles: 10
  },
  high: {
    dpr: 1.5,
    shadows: true,
    bloom: true,
    grass: 2200,
    sparkles: 15
  }
}


function BackgroundMusic({ started }) {
  const audioRef = useRef(new Audio('/Instrumental.mp3'))

  useEffect(() => {
    if (started) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.15
      audioRef.current.play().catch(err => console.log("Erro ao tocar:", err))
    } else {
      audioRef.current.pause()
    }
  }, [started])

  return null
}


function App() {
  const fontUrl = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/fonts/helvetiker_bold.typeface.json"
  const map = useMemo(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.backward, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
  ], []);

  const [started, setStarted] = useState(false);
  const [sobreIsOpen, setSobreIsOpen] = useState(false);
  const [projetosIsOpen, setProjetosIsOpen] = useState(false);
  const [contatoIsOpen, setContatoIsOpen] = useState(false);
  const [quality, setQuality] = useState(null);
  const preset = quality ? presets[quality] : presets.low
  const magicSound = useRef();



  const audioUnlocked = useRef(false);


  useEffect(() => {
    DetectGpu().then((q) => {
      setQuality(q)
    })
  }, [])



  useEffect(() => {

    const unlockAudio = () => {
      if (audioUnlocked.current) return;
      magicSound.current = new Audio("/paper.mp3");
      magicSound.current.volume = 0.3;
      magicSound.current.loop = false;
      audioUnlocked.current = true;
    }


    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", unlockAudio);
    };


  }, []);


  return (
    <BrowserRouter>
      <div style={{ width: '100vw', height: '100vh' }}>
        {!started && <Menu onStart={() => setStarted(true)} />}
        <BackgroundMusic started={started} />


        {sobreIsOpen && <MenuSobre fechar={() => setSobreIsOpen(false)} />}
        {projetosIsOpen &&
          <Routes>
            <Route element={<MenuProjetos fechar={() => setProjetosIsOpen(false)}/>}>
              <Route path='/' element={<Projeto />} />
              <Route path='/chat-ia' element={<ChatIA />} />
              <Route path='/loja-de-oculos' element={<LojaDeOculos />} />
              <Route path='/app-dieta' element={<AppDieta />} />
              <Route path='/rede-social' element={<RedeSocial />} />
            </Route>
          </Routes>
        }
        {contatoIsOpen && <MenuContato fechar={() => setContatoIsOpen(false)}/>}

        <div className="header">
          <h1>Kawã Sanchez</h1>
          <p>Explore o vilarejo usando seu teclado(W, A, S, D) ou joystick</p>
        </div>
        <KeyboardControls map={map}>
          {started && <MobileControls />}
          {quality && (
            <Canvas
              shadows={preset.shadows}
              dpr={preset.dpr}
            >
              <PerformanceMonitor
                onDecline={() => {
                  setQuality("low")
                }}
              />
              <color attach="background" args={['#3debe2']} />
              <ambientLight intensity={1.5} />
              <directionalLight
                intensity={2}
                color="#ffe603"
                castShadow={preset.shadows}
                shadow-mapSize={preset.shadows ? [1024, 1024] : [256, 256]}
                shadow-camera-near={1}
                shadow-camera-far={100}
                shadow-camera-left={-20}
                shadow-camera-right={30}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                position={[15, 15, 15]}
              />

              {preset.bloom && (
                <EffectComposer>
                  <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
                </EffectComposer>
              )}


              <Physics>
                <Player />
                <RigidBody type="fixed" colliders={false} position={[-6, 0, -3]}>
                  <CuboidCollider
                    args={[1, 1, 1]}
                    sensor
                    onIntersectionEnter={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setSobreIsOpen(true);
                        magicSound.current.play();
                      }
                    }}
                    onIntersectionExit={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setSobreIsOpen(false);
                        magicSound.current.pause();
                        magicSound.current.currentTime = 0;
                      }
                    }}
                  />
                </RigidBody>



                <TerrainPlane scale={0.15} position={[-8, -4, -8]}/>


                <RigidBody type="fixed" colliders={false} position={[4.5, 0, -2]}>
                  <CuboidCollider
                    args={[1, 1, 1]}
                    sensor
                    onIntersectionEnter={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setProjetosIsOpen(true);
                        magicSound.current.play();
                      }
                    }}
                    onIntersectionExit={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setProjetosIsOpen(false);
                        magicSound.current.pause();
                        magicSound.current.currentTime = 0;
                      }
                    }}
                  />
                </RigidBody>

                <RigidBody type="fixed" colliders={false} position={[2, 0, 7]}>
                  <CuboidCollider
                    args={[1, 1, 1]}
                    sensor
                    onIntersectionEnter={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setContatoIsOpen(true);
                        magicSound.current.play();
                      }
                    }}
                    onIntersectionExit={(e) => {
                      if (e.other.rigidBodyObject?.name === "player") {
                        setContatoIsOpen(false);
                        magicSound.current.pause();
                        magicSound.current.currentTime = 0;
                      }
                    }}
                  />
                </RigidBody>




                <group position={[-5, -0.3, 10]}>
                  {"DESENVOLVEDOR".split("").map((letra, index) => (
                    <RigidBody key={index}>
                      <Text3D
                        font={fontUrl}
                        size={0.5}
                        height={0.3}
                        position={[index * 0.5 + (letra === "L" || letra === "K" ? 0.3 : 0), 0, 0]}
                        castShadow
                        receiveShadow
                      >
                        {letra}
                      </Text3D>
                    </RigidBody>
                  ))}
                </group>

                <Grama count={preset.grass} position={[-17, 0, 0]} larg={[10, 0, 23]} />
                <Renders />
                <Placas />
                <Barreiras />

                <MagicMissionCircle position={[-6.1, 0.05, -2.5]} />
                <MagicMissionCircle position={[4.5, 0.05, -1.2]} />
                <MagicMissionCircle position={[2, 0.05, 7]} />
              </Physics>
              {/* <OrbitControls /> */}
            </Canvas>
          )}
        </KeyboardControls>
      </div >
    </BrowserRouter>
  )
}

export default App