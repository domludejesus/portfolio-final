<script>
    import { onMount } from 'svelte';

    let testimonials = [
        {
            id: 1,
            image: '/person1.jpg',
            name: 'Person 1',
            role: 'Role 1',
            testimonial: 'Great Work'
        },
        {
            id: 2,
            image: '/person2.jpg',
            name: 'Person 2',
            role: 'Role 2',
            testimonial: 'Great Service'
        },
        {
            id: 3,
            image: '/person3.jpg',
            name: 'Person 2',
            role: 'Role 2',
            testimonial: 'Great Attitude'
        },
        {
            id: 4,
            image: '/person4.jpg',
            name: 'Person 2',
            role: 'Role 2',
            testimonial: 'Great Work Ethic'
        },
    ];

    onMount(() => {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            document.querySelector('.testimonials-section').style.backgroundPositionY = (-scrollPos/4) + 'px';
        });
    });
</script>

<div class="testimonials-section bg-fixed bg-center bg-cover h-screen flex flex-wrap items-center justify-center px-8 py-20 lg:py-32 text-white" 
     style="background-image: url('/planet.jpg');">
    <h2 class="w-full text-center text-3xl font-bold mb-8">Testimonials</h2>

    <div class="carousel glass rounded-box w-full md:w-3/4 lg:w-1/2 overflow-x-scroll overflow-y-hidden whitespace-nowrap py-8 px-4">
        {#each testimonials as testimonial (testimonial.id)}
            <div class="carousel-item w-full md:w-1/2 p-4 inline-block">
                <div class="bg-base-content rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                    <div class="avatar mb-4 md:mb-0 md:mr-6">
                        <div class="w-24 h-24 rounded-full mx-auto md:mx-0">
                            <img class="w-full h-full object-cover" src={testimonial.image} alt={testimonial.name} />
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">{testimonial.name}</h3>
                        <hr class="mb-2"/>
                        <p class="text-sm italic mb-4">{testimonial.role}</p>
                        <p class="text-sm">"{testimonial.testimonial}"</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    
</div>

<style>
    @media (max-width: 600px) {
        .testimonials-section {
            height: auto;
            background-image: url('/astronaut.jpg');
        }
    }
</style>