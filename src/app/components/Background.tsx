import Particles from "./Particles";
// import MetaBalls from "./MetaBalls";

export default function Background() {
  return (
    <div className="absolute inset-0">
      <Particles
        particleColors={["#fff085", "#fff085", "#fff085"]}
        disableRotation={true}
        sizeRandomness={0.5}
        particleBaseSize={200}
        particleCount={100}
        particleSpread={2}
        alphaParticles={true}
      />

      {/* <MetaBalls
        color="#fff085"
        cursorBallColor="#fff085"
        cursorBallSize={1}
        ballCount={15}
        animationSize={30}
        enableMouseInteraction={false}
        enableTransparency={true}
        hoverSmoothness={0.05}
        clumpFactor={1}
        speed={0.1}
      /> */}
    </div>
  );
}
