<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';

    let footerContainer;
    let footerCamera, footerScene, footerRenderer;
    let footerGeometry, footerMaterial, footerMesh;
    let footerOnWindowResize;
    let footerAnimating = true;
    let footerOnScroll

    let name = "";
    let email = "";
    let message = "";

    function handleSubmit() {
        console.log({ name, email, message });
        // Add your form submission logic here
    }
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
            footerScene = new THREE.Scene();

            // Create a Camera
            footerCamera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            footerCamera.position.z = 3;

            // Create a Geometry
            footerGeometry = new THREE.SphereGeometry(1, 32, 16);

            let texture = new THREE.TextureLoader().load('/city2.png');

            // Create a Material
            footerMaterial = new THREE.MeshBasicMaterial({ map: texture });

            // Create a Mesh containing the Geometry and Material
            footerMesh = new THREE.Mesh(footerGeometry, footerMaterial);

            // Scale the mesh
            footerMesh.scale.set(1.7,1.7,1.7);

            // Add the mesh to the Scene
            footerScene.add(footerMesh);

            // Create a Renderer
            footerRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

            // Configure the Renderer
            footerRenderer.setPixelRatio(window.devicePixelRatio);

            // Append the renderer to the container
            footerContainer.appendChild(footerRenderer.domElement);

            // Debounced onResize handler
            footerOnWindowResize = debounce(() => {
                let rect = footerContainer.getBoundingClientRect();
                // update the camera's aspect ratio and the renderer's size
                footerCamera.aspect = rect.width / rect.height;
                footerCamera.updateProjectionMatrix();
                footerRenderer.setSize(rect.width, rect.height);
            }, 250);
            window.addEventListener('resize', footerOnWindowResize, false);

            // Resize once on mount to make sure the model has the correct size
            footerOnWindowResize();

            // Create the animation
            const animate = function () {
                if (footerAnimating) {
                    requestAnimationFrame(animate);
                    footerMesh.rotation.x += 0.005;
                    footerMesh.rotation.y += 0.005;
                    footerRenderer.render(footerScene, footerCamera);
                }
            };

            animate();

            footerOnScroll = () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            let footerSection = document.querySelector('.footer-section');
            if(footerSection){
                footerSection.style.backgroundPositionY = (-scrollPos/4) + 'px';
            }
        };
        window.addEventListener('scroll', footerOnScroll);

            // Intersection Observer to control the animation state based on visibility
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    footerAnimating = true;
                    animate();
                } else {
                    footerAnimating = false;
                }
            }, {
                threshold: 0.1
            });

            // Start observing the container
            observer.observe(footerContainer);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', footerOnWindowResize, false);
            while (footerContainer.firstChild) {
                footerContainer.firstChild.remove();
            }
            window.removeEventListener('scroll', footerOnScroll);
        }
    });
</script>

<div class="footer-section bg-cover bg-fixed h-screen flex md:flex-row flex-col-reverse justify-between items-center p-8 text-white bg-center" 
     style="background-image: url('planet-2.png');">
    <div class="contact-form md:w-6/12 w-full text-center max-w-xl mx-auto">
        <h2 class="text-5xl font-bold mb-10">Contact Me</h2>
        <div class="bg-secondary text-black p-4 md:p-8 rounded shadow-lg">
            <!-- Contact form goes here -->
            <div class="bg-white text-black p-4 md:p-8 rounded shadow-lg">
                <form on:submit|preventDefault={handleSubmit}>
                    <div class="form-control">
                        <input class="input input-bordered" bind:value={name} type="text" placeholder="What's your name?" required>
                    </div>
                    <div class="form-control mt-2 md:mt-4">
                        <input class="input input-bordered" bind:value={email} type="email" placeholder="What's your email?" required>
                    </div>
                    <div class="form-control mt-2 md:mt-4">
                        <textarea class="textarea textarea-bordered" bind:value={message} placeholder="What do you want to say?" required></textarea>
                    </div>
                    <div class="form-control mt-2 md:mt-4">
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="model-container md:w-1/2 w-full h-60 flex justify-center items-center md:mt-0"> 
        <div class="model w-full h-60" bind:this={footerContainer}>
            <!-- 3D model will be rendered here -->
        </div>
    </div>
</div>

<style>
    @media (max-width: 768px) {
        .footer-section {
            background-color: #f9a825;
            background-image: url('/planet.jpg');
            background-size: cover;
        }

        .model-container {
            height: 150px;
        }

        .model {
            height: 150px;
        }

        .contact-form {
            width: 100%;
        }

        @media (min-width: 768px) {
        .contact-form .form-control {
            margin-top: 1.5rem; /* Adjust form control margin-top */
        }
    }
    }
</style>
