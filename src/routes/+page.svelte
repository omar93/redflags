<script>
  import Card from "../components/Card.svelte"

  let cardData = {
    cardColor: 'red',
    isGood: true,
    cardText: 'bla bla',
    duration: 500
  }

  let getin = false

  setTimeout(() => {
    getin = true
  },500)

</script>

<div id="main--wrapper">

  <ul id="card--wrapper">
    {#if getin}
      <Card {...cardData}/>
      <Card {...cardData}/>
      <Card {...cardData}/>
    {/if}
  </ul>

  <div id="button--wrapper">
    <img class="button" alt="red" src="/img/no.png"/>
    <img class="button" alt="green" src="/img/yes.png"/>
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