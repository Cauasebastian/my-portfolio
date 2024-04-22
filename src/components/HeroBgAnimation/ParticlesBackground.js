import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./Particles-config";

export default function ParticleBackground() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadSlim(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />
    );
}