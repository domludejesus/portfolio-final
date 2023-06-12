<script>
    import { onMount, onDestroy } from 'svelte';

    let name = "";
    let email = "";
    let message = "";
    let footerOnScroll;

    async function submitForm(e) {
        e.preventDefault();

        // your form data
        const name = '';
        const email = '';
        const message = '';

        const res = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (res.ok) {
            alert('Email sent successfully');
        } else {
            const { error } = await res.json();
            alert(error);
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            footerOnScroll = () => {
                let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
                let footerSection = document.querySelector('.footer-section');
                if(footerSection){
                    footerSection.style.backgroundPositionY = (-scrollPos/4) + 'px';
                }
            };
            window.addEventListener('scroll', footerOnScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', footerOnScroll);
        }
    });
</script>

<div class="footer-section bg-cover bg-fixed h-screen flex md:flex-row flex-col-reverse justify-between items-center p-8 text-white bg-center" 
     style="background-image: url('planet-2.webp');">
    <div class="contact-form md:w-6/12 w-full text-center max-w-xl mx-auto">
        <h2 class="text-5xl font-bold mb-10">Contact Me</h2>
        <div class="bg-secondary text-black p-4 md:p-8 rounded shadow-lg">
            <!-- Contact form goes here -->
            <div class="bg-white text-black p-4 md:p-8 rounded shadow-lg">
                <form on:submit|preventDefault={submitForm}>
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
</div>

<style>
    @media (max-width: 768px) {
        .footer-section {
            background-color: #f9a825;
            background-image: url('/planet.jpg');
            background-size: cover;
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
