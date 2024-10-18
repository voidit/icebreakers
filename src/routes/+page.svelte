<script>
    import { onMount } from 'svelte';

    let prompts = [];
    let randomPrompt = '';
    let usedPrompts = new Set();

    async function fetchPrompts() {
        try {
            const response = await fetch('../data/prompts.json');
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
    });

    function shufflePrompt() {
        randomPrompt = getRandomPrompt();
    }
</script>

<main>
    <h1>{randomPrompt}</h1>
<!--    <button on:click={shufflePrompt}>Shuffle</button>-->
    <label>
        <input class="bubble" type="checkbox" name="dummy" value="on"  on:click={shufflePrompt}>
    </label>
</main>