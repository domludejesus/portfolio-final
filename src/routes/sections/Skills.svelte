<script>
    import { onMount } from 'svelte';

    let skills = [
        {
            id: 1,
            image: 'skills1.png',
            title: 'Web Developer',
            description: 'Description of Skill 1'
        },
        {
            id:2,
            image: '/skills2.png',
            title: 'Ionic Developer',
            description: 'Description of Skill 2'
        },

        {
            id:3,
            image: '/skills3.png',
            title: 'Backend Developer',
            description: 'Description of Skill 3'
        },
        {
            id:4,
            image: '/skills4.png',
            title: 'Content Creator',
            description: 'Description of Skill 4'
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

    <div class="skills-content flex flex-wrap justify-around items-start w-full max-w-6xl"> <!-- Adjust the max-width as needed -->
        {#each skills as skill, index (index)}
            <div class="card w-15 glass mb-10"> <!-- Adjust the width and margin-bottom as needed -->
                <figure>
                    <img class="w-full h-48 object-cover" src="{skill.image}" alt="{skill.title}"/> <!-- Adjust the height as needed -->
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">{skill.title}</h2>
                    <p>{skill.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn more</button>
                    </div>
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
