<script>
    import { onMount } from 'svelte';

    let skills = [
        {
            id: 1,
            image: 'skills1.png',
            title: 'Front-end Development'
        },
        {
            id:2,
            image: '/skills2.png',
            title: 'UX Design'
        },

        {
            id:3,
            image: '/skills3.png',
            title: 'Back-end Developer'
        },
        {
            id:4,
            image: '/skills4.png',
            title: 'Content Creator'
        },
    ];

    onMount(() => {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            document.querySelector('.skills-section').style.backgroundPositionY = (-scrollPos/4) + 'px';
        });
    });
</script>

<div class="skills-section bg-cover bg-fixed h-screen flex flex-col items-center p-8 text-white bg-center" 
     style="background-image: url('planet.jpg');">
    <h2 class="text-3xl font-bold mb-10">Skills</h2>

    <div class="skills-content flex flex-wrap justify-center">
        {#each skills as skill (skill.title)}
        <div class="card w-34 sm:w-38 lg:w-40 glass mx-auto m-4 lg:m-8">
                <figure><img src="{skill.image}" alt="{skill.title}"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{skill.title}</h2>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    @media (max-width: 600px) {
        .skills-section {
            height: auto;
        }

        .skills-content {
            flex-direction: column;
            justify-content: center;
        }

        .card {
            width: 50%;
        }
    }
</style>
