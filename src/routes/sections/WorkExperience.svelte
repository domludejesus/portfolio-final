<script>
    import { onMount } from 'svelte';

    let experiences = [
        {
            role: 'IT Project Manager',
            company: 'Help Hope Live',
            date: 'August 2022 - Current',
            color: 'bg-info-content'
        },
        {
            role: 'IT Team Lead',
            company: 'Orbit Publishing',
            date: 'September 2020 - August 2022',
            color: 'bg-info-content'
        },
        {
            role: 'Quality Assurance Analyst',
            company: 'Verizon',
            date: 'September 2019 - June 2020',
            color: 'bg-info-content'
        },
        // Add as many experiences as necessary
    ];

    onMount(() => {
        const section = document.querySelector('.experience-section');
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            section.style.backgroundPositionY = (-scrollPos/4) + 'px';
        });
    });
</script>

<div class="experience-section h-screen flex flex-col justify-center items-center px-8 bg-cover bg-fixed bg-center  text-white"
     style="background-image: url('/planet-2.webp');">
    <h2 class="text-5xl font-bold mb-20">Work Experience</h2>
    <div class="carousel carousel-center glass max-w-md p-4 space-x-4 bg-base-content rounded-box prose">
        {#each experiences as experience (experience.role)}
            <div class="carousel-item flex flex-col justify-center items-center p-8 text-center text-white rounded {experience.color}">
                <h3 class="text-3xl font-bold mb-4 text-neutral-content">{experience.role}</h3>
                <h4 class="text-2xl text-neutral-content font-semibold mb-4">{experience.company}</h4>
                <p class="text-xl">{experience.date}</p>
            </div>
        {/each}
    </div>
</div>


<style>
    @media (max-width: 600px) {
        .experience-section {
            background-image: url('/astronaut.jpg');
            width: 100%;
            height: auto;
            padding: 1rem; /* Reduce padding */
        }

        .carousel-item {
            width: 90%; /* Reduce width a bit */
        }
    }
</style>
