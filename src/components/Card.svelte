<script>
  import { fly } from 'svelte/transition'

  export let cardColor, cardText
  export let showCard = false

  const handleClick = () => {
    showCard = true
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="{ showCard ? 'faceUp' : 'faceDown' }" style="--theme-cardColor: {cardColor}" id="main--wrapper" on:click={handleClick}>
  {#if showCard}
    <p id="text">
      {cardText}
    </p>
  {/if}
</div>

<style>
  #main--wrapper {
    width: 90%;
    height: 25%;
    border: 1px solid black;
    padding: 1em;
    margin: auto;
    border-radius: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #text {
    font-size: 2em;
  }
  .faceUp {
    background-color: var(--theme-cardColor);
  }
  .faceDown {
    background-color: white;
  }
</style>