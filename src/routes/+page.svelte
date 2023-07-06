<script>
  import Card from "../components/Card.svelte"
  import { perks } from "../lib/redflags.js"

  let cards = []

  perks.forEach(perk => {
    let cardData = {
      cardColor: 'red',
      isGood: true,
      cardText: perk,
      duration: 500
    }
    cards.push(cardData)
  })

  let start = 0
  let end = 3

  let displayedCards = cards.slice(start, end)

  const handleClick = () => {
    start += 3
    end += 3
    displayedCards = cards.slice(start, end)
  }
  
  console.log(displayedCards);
</script>

<div id="main--wrapper">
  <ul id="card--wrapper">
    {#each displayedCards as card}
      <Card {...card}/>
    {/each}
  </ul>

  <div id="button--wrapper">
    <img class="button" on:click={handleClick} alt="red" src="/img/no.png"/>
    <img class="button" on:click={handleClick} alt="green" src="/img/yes.png"/>
  </div>
</div>

<style>
  #main--wrapper {
    overflow: hidden
  }
  ul {
    height: 90vh;
    border: 3px solid purple;
    padding: 0%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    background-color: yellow;
  }
  #button--wrapper {
    margin-top: 20px;
    display:flex;
    justify-content: space-evenly;
  }
  .button {
    cursor: pointer;
    border: none;
    width: 150px;
  }
</style>