<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';

    let container;
    let camera, scene, renderer;
    let geometry, material, mesh;
    let onWindowResize, onScroll;
    let animating = true;  // Add this line to hold the animation state

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    onMount(async () => {
        if (typeof window !== 'undefined') {
            // Create a Scene
            scene = new THREE.Scene();

            // Create a Camera
            camera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 3;

            // Create a Geometry
            geometry = new THREE.SphereGeometry(1, 32, 16);

            let texture = new THREE.TextureLoader().load('/launch-up.webp');

            // Create a Material
            material = new THREE.MeshBasicMaterial({ map: texture });

            // Create a Mesh containing the Geometry and Material
            mesh = new THREE.Mesh(geometry, material);

            // Scale the mesh
            mesh.scale.set(1.7,1.7,1.7);

            // Add the mesh to the Scene
            scene.add(mesh);

            // Create a Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // enable alpha for transparent background

            // Configure the Renderer
            renderer.setPixelRatio(window.devicePixelRatio);

            // Append the renderer to the container
            container.appendChild(renderer.domElement);

            // Debounced onResize handler
            onWindowResize = debounce(() => {
                let rect = container.getBoundingClientRect();
                // update the camera's aspect ratio and the renderer's size
                camera.aspect = rect.width / rect.height;
                camera.updateProjectionMatrix();
                renderer.setSize(rect.width, rect.height);
            }, 250);
            window.addEventListener('resize', onWindowResize, false);

            onScroll = () => {
                let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
                document.querySelector('.hero-section').style.backgroundPositionY = (-scrollPos/4) + 'px';
            };
            window.addEventListener('scroll', onScroll);

            // Resize once on mount to make sure the model has the correct size
            onWindowResize();

            // Create the animation
            const animate = function () {
                if (animating) {
                    requestAnimationFrame(animate);
                    mesh.rotation.x += 0.0015;
                    mesh.rotation.y += 0.0015;
                    renderer.render(scene, camera);
                }
            };

            animate();

            // Intersection Observer to control the animation state based on visibility
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animating = true;
                    animate();
                } else {
                    animating = false;
                }
            }, {
                threshold: 0.1
            });

            // Start observing the container
            observer.observe(container);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', onWindowResize, false);
            window.removeEventListener('scroll', onScroll);
            while (container.firstChild) {
                container.firstChild.remove();
            }
        }
    });
</script>

<div class="hero-section bg-cover bg-fixed h-screen flex md:flex-row flex-col-reverse justify-between items-center p-8 text-white bg-center bg-no-repeat" 
     style="background-image: url('planet-2.webp');">
    <div class="intro md:w-6/12 w-full ">
        <h1 class="text-5xl font-bold mb-5">Hello, I'm Dom👋 </h1>
        <p class="text-lg">A front-end developer, with a specialty with React, Next.js, and Tailwind CSS. I create dynamic and visually appealing user interfaces. Have a project in mind you need help with ? Contact me below</p>
    </div>
    <div class="container-model md:w-1/2 w-full h-60 flex justify-center items-center mt-40 md:mt-0"> 
        <div class="model w-full h-60" bind:this={container}>
            <!-- 3D model will be rendered here -->
        </div>
    </div>
</div>

<style>
    @media (max-width: 768px) {
        .hero-section {
            background-color: #f9a825;
            background-image: url('/planet.jpg');
        }

        .container-model {
            height: 150px; /* Adjust container height */
        }

        .model {
            height: 150px; /* Adjust model height */
        }

        .intro {
            width: 100%; /* Set width to 100% */
        }

        .intro p {
            font-size: small;
        }
    }
</style>
