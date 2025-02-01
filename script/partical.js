 document.addEventListener('DOMContentLoaded', () => {
            // JavaScript to manage CSS styles
            const css = `
            /* Style for the loader container */
            #loader-container {
                position: relative;
                width: 100vw;
                height: 100vh;
                background-color: black;
            }

            /* Style for the particles.js canvas */
            #particles-js {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            /* Style for the main content, initially hidden */
            #main-content {
                display: none;
            }
            `;

            // Append the CSS to the document head
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);

            // Initialize particles.js with configuration
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 300, // Number of particles
                        density: {
                            enable: true,
                            value_area: 800 // Density area
                        }
                    },
                    color: {
                        value: '#ffffff' // Particle color
                    },
                    shape: {
                        type: 'circle', // Shape type
                        stroke: {
                            width: 0,
                            color: '#000000' // Stroke color (if any)
                        },
                        polygon: {
                            nb_sides: 5 // Number of polygon sides
                        }
                    },
                    opacity: {
                        value: 0.7, // Opacity value
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.3,
                            sync: false
                        }
                    },
                    size: {
                        value: 2, // Particle size
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 120, // Distance for linking particles
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'bubble' // Interaction on hover
                        },
                        onclick: {
                            enable: true,
                            mode: 'push' // Interaction on click
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 200,
                            size: 6,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4 // Number of particles to add on push
                        },
                        remove: {
                            particles_nb: 2 // Number of particles to remove
                        }
                    }
                },
                retina_detect: true, // Enable retina detection
                config_demo: {
                    hide_card: false,
                    background_color: '#000000', // Background color
                    background_image: '',
                    background_position: '50% 50%',
                    background_repeat: 'no-repeat',
                    background_size: 'cover'
                }
            });

            // Event listener for page load
            window.addEventListener('load', () => {
                // Hide the loader and show the main content
                document.getElementById('loader-container').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            });
        });