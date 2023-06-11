<script>
    import { onMount } from 'svelte';

    let projects = [
        {
            id: 1,
            image: 'consult.png',
            link: 'https://innovaul.com/',
            title: 'IT Marketing Landing Page',
            description: 'Lead generating landing page for IT consulting small business.',
            technologies: ['React', 'Next.JS', 'Netlify', 'Firebase', 'Tailwind']
        },
        {
            id: 2,
            image: 'anime-movie.png',
            link: 'https://anime-movie-psi.vercel.app/',
            title: 'Trending Anime Reccomender',
            description: 'This project presents user with all trending anime currently available. The user can take a quiz to recieve reccomendations on trending anime.',
            technologies: ['React', 'Next.JS', 'Tailwind CSS', 'Vercel']
        },
        {
            id: 3,
            image: 'little-lemon.png',
            link: 'https://little-pizza-restaurant.vercel.app/',
            title: 'Luxury Pizza Delivery',
            description: 'A twist on modern pizza delivery services with luxury pizza options. Food delivery service and reservations can be placed by the client.',
            technologies: ['React', 'Next.JS', 'Tailwind CSS', 'Vercel']
        },
        {
            id: 4,
            image: 'real-estate.png',
            link: 'https://real-estate-finder-xi.vercel.app/',
            title: 'Real Estate Finder',
            description: 'Finding properties by region has never been easier. Properties are showing by region and if the client wants to add properties they can login.',
            technologies: ['React', 'Next.JS', 'Tailwind CSS']
        },
        {
            id: 5,
            image: 'pokemon-versus.png',
            link: 'https://versus-weakness-battle.vercel.app',
            title: 'Pokemon Weakness Analyzer',
            description: 'Pokemon from every generation available to search with filters. Battle Analyzer and Weakness Calculator pages have been added for even more information for your next battle.',
            technologies: ['React', 'Next.JS', 'Tailwind CSS', 'Pokemon API']
        },
        {
            id: 6,
            image: 'ticket-genie.png',
            link: 'https://genie-ticket-master.vercel.app/',
            title: 'IT Bug Management Tool',
            description: 'This tool allows teams to collaborate and create tickets for IT issues with SAAS application. Collaboration and sharing with drag and drop functionality.',
            technologies: ['React', 'Next.JS', 'Tailwind CSS']
        },
        // ... other projects
    ];

    onMount(() => {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            document.querySelector('.projects-section').style.backgroundPositionY = (-scrollPos/4) + 'px';
        });
    });
</script>

<div class="projects-section bg-fixed bg-center bg-cover min-h-screen px-8 text-white" 
     style="background-image: url('/planet-2.webp');">
    <h2 class="text-center text-5xl font-bold  mb-32 px-4 sm:px-8 md:px-16">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Update here -->
        {#each projects as project (project.id)}
            <div class="card glass lg:card-side shadow-xl m-4 flex flex-col justify-between">
                <figure class="w-full">
                    <a href="{project.link}">
                        <img class="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" src="{project.image}" alt="{project.title}">
                    </a>
                </figure>
                <div class="card-body">
                    <h3 class="card-title">{project.title}</h3>
                    <p>{project.description}</p>
                        <ul>
                            {#each project.technologies as tech (tech)}
                                <li class="btn btn-active btn-ghost no-animation mr-4 mb-2 glass text-white-300 hover:bg-blue-700">{tech}</li>
                            {/each}
                        </ul>
                    <div class="card-actions justify-end">
                        <a href="{project.link}" class="btn btn-primary hover:bg-blue-700 glass">View Project</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    /* Your existing styles for other screen sizes... */
    @media (max-width: 600px) {
        .projects-section {
            height: auto;
        }

        .card {
            width: full;
            margin: 2rem;
        }
    }
    /* Styles for medium-sized screens */
    @media (min-width: 768px) and (max-width: 1023px) {
        .projects-section {
            height: auto;
            margin-bottom: 3rem;  /* Add some space at the bottom to prevent overlap */
        }

        .card {
            width: 100%;  /* Make the cards full width */
            margin: 1rem auto;  /* Center the cards and add some vertical margin */
        }

        .card img {
            max-height: 300px;  /* Limit the image height */
        }
    }
</style>