import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";
import Staging from "./staging/Staging";
import { Loader, PositionalAudio } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect, useRef, useState } from "react";
import Video from "./world/Video";

const Home = () => {
  const [hasInteracted, setHasInteracted] = useState(false); // Estado para controlar si el usuario ha interactuado
  const cameraSettings = {
    position: [0, 15, 15],
  };

  const audioRef = useRef(null);

  const handleStart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.setVolume(10);
      audio.play();
    }
    setHasInteracted(true); // Cuando el usuario hace clic, marcamos que ha interactuado
  };

  useEffect(() => {
    if (hasInteracted) {
      const audio = audioRef.current;
      if (audio) {
        audio.setVolume(10);
        audio.play();
      }
    }
  }, [hasInteracted]); // Efecto que se dispara una vez el usuario haya interactuado

  // Si no ha interactuado, mostramos una pantalla inicial con el botón
  if (!hasInteracted) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "#121212" }}>
        <button
          onClick={handleStart}
          style={{
            padding: "0.1em 0.25em",
            width: "13em",
            height: "4.2em",
            backgroundColor: "#212121",
            border: "0.08em solid #fff",
            borderRadius: "0.3em",
            fontSize: "12px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bottom: "0.4em",
              width: "8.25em",
              height: "2.5em",
              backgroundColor: "#212121",
              borderRadius: "0.2em",
              fontSize: "1.5em",
              color: "#fff",
              border: "0.08em solid #fff",
              boxShadow: "0 0.4em 0.1em 0.019em #fff",
              transition: "all 0.5s",
            }}
          >
            Haz clic para comenzar
          </span>
        </button>
      </div>
    );
  }

  // Una vez el usuario interactúa, renderizamos el resto del componente
  return (
    <>
      <Canvas camera={cameraSettings}>
        <Suspense fallback={null}>
          <Perf position={"top-left"} />
          <Controls />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Beach />
          </Physics>
          <Video name="screen" position-y={10} scale={8} />
          <group position={[0, 5, 0]}>
            <PositionalAudio
              ref={audioRef}
              url="/sounds/waves.mp3"
              distance={3}
              autoplay
              loop
            />
          </group>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
