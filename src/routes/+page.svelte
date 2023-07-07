<script>
  import Card from "../components/Card.svelte"

  import { perks } from "../lib/perks.js"
  import { redflags } from "../lib/redflags.js"
  import { shuffleArray } from '../lib/shuffle.js'

  let goodCards = shuffleArray(perks)
  let badCards = shuffleArray(redflags)

  let card1
  let card2
  let card3

  let showCards, showCard1, showCard2, showCard3 = false

  let dates = []
  let gameLive = false

  const setupBoard = () => {
    showCards = false

    if(gameLive) {
      let first = goodCards.shift()
      let second = goodCards.shift()
      let third = badCards.shift()

      let item = {
        first,
        second,
        third
      }

      dates.push(item)
    }
    
    card1 = {
      cardColor: 'img/white.png',
      cardText: goodCards[0]
    }

    card2 = {
      cardColor: 'img/white.png',
      cardText: goodCards[1]
    }

    card3 = {
      cardColor: 'img/red.png',
      cardText: badCards[0]
    }

    gameLive = true
    
    hideCards()
    setTimeout(() => {
      showCards = true
    }, 1)
  }

  const hideCards = () => {
    showCard1 = false
    showCard2 = false
    showCard3 = false
  }

  setupBoard()
  
</script>

<div id="main--wrapper">

  {#if showCards}
  <ul id="card--wrapper">
    <Card {...card1} bind:showCard={showCard1}/>
    <Card {...card2} bind:showCard={showCard2}/>
    <Card {...card3} bind:showCard={showCard3}/>
  </ul>
  {/if}

  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div id="button--wrapper">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img id="no" class="button" on:click={setupBoard} alt="red" src="/img/no.png"/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img id="yes" class="button" on:click={setupBoard} alt="green" src="/img/yes.png"/>
  </div>
  
</div>

<style>
  #main--wrapper {
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  ul {
    height: 75vh;
    padding: 0%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  #button--wrapper {
    height: 15vh;
    width: 100%;
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    position: sticky;
  }
  .button {
    cursor: pointer;
    border: none;
    background-color:rgba(255, 255, 255, 0);
    height: 90px;
    width: 90px;
  }
  #yes {
    background-image: url("/img/yes.png");
    background-size: 100%

  }
  #no {
    background-image: url("/img/no.png");
    background-size: 100%
  }
</style>