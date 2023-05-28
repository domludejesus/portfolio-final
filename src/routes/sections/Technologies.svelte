<script>
    import { onMount } from 'svelte';

    let technologies = [
        {
            id: 1,
            image: 'js.png',
            name: 'Javascript',
        },
        {
            id: 2,
            image: 'React-icon.svg',
            name: 'React',
        },
        {
            id: 3,
            image: 'njs.svg',
            name: 'Next.JS',
        },
        {
            id: 4,
            image: 'HTML.png',
            name: 'HTML',
        },
        {
            id: 5,
            image: 'CSS.svg',
            name: 'CSS',
        },
        {
            id: 6,
            image: 'tailwind.svg',
            name: 'Tailwind',
        },
        {
            id: 7,
            image: 'python.svg',
            name: 'Python',
        },
        {
            id: 8,
            image: 'ionic.svg',
            name: 'Ionic',
        },
        {
            id: 9,
            image: 'Ang.svg',
            name: 'Angular',
        },
        {
            id: 10,
            image: 'ts.svg',
            name: 'TypeScript',
        },
        {
            id: 11,
            image: 'docker.svg',
            name: 'Docker',
        },
        {
            id: 12,
            image: 'sql.svg',
            name: 'MySql',
        },
        {
            id: 13,
            image: 'postgres.svg',
            name: 'Postgres SQL',
        },
        {
            id: 14,
            image: 'mdb.png',
            name: 'MongoDB',
        },
        {
            id: 15,
            image: 'fig.svg',
            name: 'Figma',
        },
        // ... other technologies
    ];

    onMount(() => {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            document.querySelector('.technologies-section').style.backgroundPositionY = (-scrollPos/4) + 'px';
        });
    });
</script>

<div class="technologies-section h-screen flex flex-col justify-center items-center px-8 bg-cover bg-fixed bg-center  text-white"
    style="background-image: url('/planet.jpg');">
    <h2 class="text-5xl font-bold mt-40 mb-32">Technologies</h2>

    <div class="grid grid-cols-3 gap-4 sm:grid-cols-6 justify-items-center w-full" style="max-width: 1200px;">
        {#each technologies as tech (tech.id)}
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img class="w-full h-full object-fill mb-10" src="{tech.image}" alt="{tech.name}" />
                </div>
                <h3 class="mb-10">{tech.name}</h3>
            </div>
        {/each}
    </div>
</div>
