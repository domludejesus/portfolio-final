<script>
    import { onMount } from 'svelte';

    let projects = [
        {
            id: 1,
            image: 'consult.png',
            link: 'https://innovaul.com/',
            title: 'Project 1',
            description: 'Description of Project 1',
            technologies: ['Technology 1', 'Technology 2']
        },
        {
            id: 2,
            image: 'anime-movie.png',
            link: 'https://anime-movie-psi.vercel.app/',
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4']
        },
        {
            id: 3,
            image: 'little-lemon.png',
            link: 'https://little-pizza-restaurant.vercel.app/',
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4']
        },
        {
            id: 4,
            image: 'real-estate.png',
            link: 'https://real-estate-finder-xi.vercel.app/',
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4']
        },
        {
            id: 5,
            image: 'pokemon-versus.png',
            link: 'https://versus-weakness-battle.vercel.app',
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4']
        },
        {
            id: 6,
            image: 'ticket-genie.png',
            link: 'https://genie-ticket-master.vercel.app/',
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4']
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

<div class="projects-section bg-fixed bg-center bg-cover h-screen flex flex-wrap items-center justify-center px-8 text-white" 
     style="background-image: url('/planet.jpg');">
    <h2 class="w-full text-center text-3xl font-bold mb-8">Projects</h2>

    {#each projects as project (project.id)}
        <div class="card glass lg:card-side  shadow-xl m-4 flex flex- justify-between">
            <figure class="w-full">
                <a href="{project.link}">
                    <!-- Add the following classes: h-48 object-cover -->
                    <img class="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" src="{project.image}" alt="{project.title}">
                </a>
            </figure>
            <div class="card-body">
                <h3 class="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {#each project.technologies as tech (tech)}
                        <li>{tech}</li>
                    {/each}
                </ul>
                <div class="card-actions justify-end">
                    <a href="{project.link}" class="btn btn-primary hover:bg-blue-700">View Project</a>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    @media (max-width: 600px) {
        .projects-section {
            height: auto;
        }

        .card {
            width: full;
            margin: 2rem;
        }
    }
</style>