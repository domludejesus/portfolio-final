<script>
    import { onMount } from 'svelte';

    let testimonials = [
        {
            id: 1,
            image: '/person1.webp',
            name: 'Person 1',
            role: 'Role 1',
            testimonial: 'Great Work'
        },
        {
            id: 2,
            image: '/person2.webp',
            name: 'Person 2',
            role: 'Role 2',
            testimonial: 'Great Service'
        },
        {
            id: 3,
            image: '/person3.webp',
            name: 'Person 3',
            role: 'Role 3',
            testimonial: 'Great Attitude'
        },
        {
            id: 4,
            image: '/person4.webp',
            name: 'Person 4',
            role: 'Role 4',
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
     style="background-image: url('/planet-2.webp');">
    <h2 class="w-full text-center text-5xl font-bold mb-8">Testimonials</h2>
    <div class="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {#each testimonials as testimonial (testimonial.id)}
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p class="my-4 font-light">"{testimonial.testimonial}"</p>
                </blockquote>
                <figcaption class="flex justify-center items-center space-x-3">
                    <img class="w-9 h-9 rounded-full" src={testimonial.image} alt={testimonial.name}>
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>{testimonial.name}</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                </figcaption>
            </figure>
        {/each}
    </div>
</div>
