const particlesConfig = {
    particles: {
        number: {
            value: 80, // Number of particles
            density: {
                enable: true,
                value_area: 800, // Controls the density of particles
            },
        },
        color: {
            value: "#ffffff", // Color of particles
        },
        shape: {
            type: "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5, // Opacity of particles
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3, // Size of particles
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true, // Connects particles with lines
            distance: 150, // Distance between connected particles
            color: "#ffffff", // Color of the lines
            opacity: 0.4, // Opacity of the lines
            width: 1, // Width of the lines
        },
        move: {
            enable: true, // Enables movement of particles
            speed: 6, // Speed of particles
            direction: "none", // Direction of movement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
            random: false,
            straight: false,
            out_mode: "out", // Out mode (out, bounce)
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Interaction mode on hover (grab, bubble, repulse)
            },
            onclick: {
                enable: true,
                mode: "push", // Interaction mode on click (push, remove, bubble, repulse)
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200, // Distance of repulsion
                duration: 0.4,
            },
            push: {
                particles_nb: 4, // Number of particles to be pushed
            },
            remove: {
                particles_nb: 2, // Number of particles to be removed
            },
        },
    },
    retina_detect: true,
};

export default particlesConfig;
