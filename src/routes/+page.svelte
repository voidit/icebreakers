<script>
    import {Howl} from 'howler';
    import { onMount } from 'svelte';
    import bwSound from '../../static/bubble_wrap.mp3';

    let prompts = [];
    let randomPrompt = '';
    let usedPrompts = new Set();
    let bubbles = new Array(10);
    $: popSound = null;

    async function fetchPrompts() {
        try {
            const response = await fetch('./data/prompts.json');
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch prompts:', error);
            return [];
        }
    }

    function getRandomPrompt() {
        if (usedPrompts.size === prompts.length) {
            // Reset used prompts when all have been displayed
            usedPrompts.clear();
            console.log("All prompts have been used. Starting over!");
        }

        let prompt;
        do {
            prompt = prompts[Math.floor(Math.random() * prompts.length)];
        } while (usedPrompts.has(prompt.id));

        usedPrompts.add(prompt.id);
        return prompt.prompt;
    }

    onMount(async () => {
        prompts = await fetchPrompts();
        randomPrompt = getRandomPrompt();
        popSound = new Howl({
            src: ["./bubble_wrap.mp3?url"],
            autoplay: false,
            loop: false,
            volume: 1.0,
            html5: true
        });
    });

    function shufflePrompt() {
        randomPrompt = getRandomPrompt();
        popSound.play();
    }
</script>

<main>
    <h1>{randomPrompt}</h1>
    <label>
<!--        <input class="bubble" type="checkbox" on:click={shufflePrompt}>-->
        <input class="bubble" type="checkbox" on:click={()=>{document.getElementById('bw').reset()}}>
    </label>
</main>
<form class="bw" id="bw">
    <div class="bw-bubbles">
        {#each prompts as p, i}
            <div class="bw-bubble">
                <input class="bw-input" id="b{i}" type="checkbox" name="b{i}" value="{i}" on:click={shufflePrompt} />
                <label class="bw-label" for="b{i}">Bubble {i}</label><span class="bw-cover"></span>
            </div>
        {/each}
    </div>
<!--    <button class="bubble" type="reset" />-->
</form>

<style>
    .bw, .bw-bubbles {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        font: 1em/1.5 "DM Sans", -apple-system, sans-serif;
        font-size: calc(20px + (30 - 20) * (100vw - 320px) / (1280 - 320));
    }
    .bw {
        flex-direction: column;
        align-items: center;
        margin: 5%;
        padding-top: 1.5rem;
    }
    .bw-bubbles {
        background-color: hsl(223,10%,58%);
        border-radius: 0.25rem;
        box-shadow:
                0.1em 0 0 hsl(223,10%,75%) inset,
                -0.1em 0 0 hsl(223,10%,75%) inset;
        flex-wrap: wrap;
        align-content: flex-start;
        margin-bottom: 1.5rem;
        mix-blend-mode: hard-light;
        width: 14rem;
    }
    .bw-bubble {
        position: relative;
        width: 2rem;
        height: 1.8rem;
    }
    .bw-bubble:nth-child(13n) {
        margin-right: 1rem;
    }
    .bw-bubble:nth-child(13n + 8) {
        margin-left: 1rem;
    }
    .bw-input {
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
    }
    .bw-cover, .bw-cover:before, .bw-input, .bw-label {
        position: absolute;
    }
    .bw-cover, .bw-cover:before, .bw-input {
        border-radius: 50%;
        border-width: 0.1rem;
    }
    .bw-cover, .bw-input {
        background-color: hsl(0,0%,70%);
        top: 0;
        left: 0.1rem;
        width: 1.8rem;
        height: 1.8rem;
        transition: box-shadow 0.15s ease-in-out;
    }
    .bw-cover {
        display: block;
    }
    .bw-cover:before {
        background:
                linear-gradient(-50deg,hsla(0,0%,80%,0) 68%,hsl(0,0%,100%),hsla(0,0%,80%,0) 72%) 100% 0 / 75% 40%,
                linear-gradient(-20deg,hsla(0,0%,80%,0) 67%,hsl(0,0%,100%),hsla(0,0%,80%,0) 73%) 100% 0 / 75% 100%,
                linear-gradient(-80deg,hsla(0,0%,80%,0) 90%,hsl(0,0%,100%),hsla(0,0%,80%,0) 96%) 100% 100% / 80% 50%,
                linear-gradient(10deg,hsla(0,0%,80%,0) 44%,hsl(0,0%,100%),hsla(0,0%,80%,0) 50%) 100% 0 / 50% 100%,
                linear-gradient(-30deg,hsla(0,0%,80%,0) 21%,hsl(0,0%,100%),hsla(0,0%,80%,0) 27%) 20% 0 / 40% 100%,
                linear-gradient(110deg,hsla(0,0%,80%,0) 47%,hsl(0,0%,100%),hsla(0,0%,80%,0) 53%) 0 100% / 100% 30%,
                linear-gradient(-5deg,hsla(0,0%,70%,0) 55%,hsl(0,0%,70%),hsla(0,0%,70%,0) 62%) 100% 0 / 35% 100%,
                linear-gradient(25deg,hsla(0,0%,70%,0) 32%,hsl(0,0%,70%),hsla(0,0%,70%,0) 39%) 100% 0 / 50% 100%,
                linear-gradient(20deg,hsla(0,0%,70%,0) 22%,hsl(0,0%,70%),hsla(0,0%,70%,0) 29%) 100% 0 / 40% 100%;
        background-repeat: no-repeat;
        content: "";
        clip-path: circle(0% at 50% 50%);
        transition: clip-path 0.1s ease-in-out;
        width: 100%;
        height: 100%;
    }
    .bw-input {
        box-shadow:
                0 0 0 0.05rem hsl(0,0%,85%) inset,
                0 0 0 hsl(223,10%,85%) inset,
                0.2rem 0 0.1rem hsl(223,10%,55%) inset,
                0 0.2rem 0.1rem hsl(223,10%,55%) inset,
                0.25rem 0.25rem 0.1rem hsl(0,0%,100%) inset,
                0.6rem 0.6rem 0.4rem 0.5rem hsl(223,10%,55%) inset,
                0 0 0.25rem hsl(223,10%,65%);
    }
    .bw-cover, .bw-input:checked, .bw-input:checked + .bw-label {
        visibility: hidden;
    }
    .bw-cover, .bw-input:focus, .bw-input:hover {
        box-shadow:
                0 0 0 0.05em hsl(0,0%,70%) inset,
                0 0 0 hsl(223,10%,85%) inset,
                0.1rem 0 0.1rem hsl(223,10%,55%) inset,
                0 0.1rem 0.1rem hsl(223,10%,55%) inset,
                0.15rem 0.15rem 0.1rem hsl(0,0%,100%) inset,
                0.7rem 0.7rem 0.4rem 0.5rem hsl(223,10%,55%) inset,
                0 0 0.25rem hsl(223,10%,65%);
    }
    .bw-input:focus {
        outline: transparent;
    }
    .bw-input:checked ~ .bw-cover {
        box-shadow:
                0 0 0 0.05em hsl(0,0%,70%) inset,
                -0.2em -0.2em 0.2em hsl(223,10%,65%) inset,
                0 0 0 hsl(223,10%,55%) inset,
                0 0 0 hsl(223,10%,55%) inset,
                0.1em 0.1em 0.1em hsl(0,0%,90%) inset,
                0.7em 0.7em 0.4em 0.5em hsl(223,10%,60%) inset,
                0 0 0.25em hsl(223,10%,65%);
        visibility: visible;
    }
    .bw-input:checked ~ .bw-cover:before {
        clip-path: circle(50% at 50% 50%);
    }
    .bw-label {
        clip: rect(1px,1px,1px,1px);
        overflow: hidden;
        width: 1px;
        height: 1px;
    }
</style>