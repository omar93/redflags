<script>
  import { fly } from 'svelte/transition'

  export let cardColor, isGood, cardText
</script>

<div style="--theme-color: {cardColor}" id="main--wrapper" in:fly={{ x: 200, duration: 500 }}>
  <p>
    {cardText}
  </p>
</div>

<style>
  #main--wrapper {
    width: 90%;
    height: 30%;
    border: 1px solid black;
    padding: 1em;
    margin: auto;
    background-color: var(--theme-cardColor);
    border-radius: 1em;
  }
</style>