<script>
  import { onDestroy } from 'svelte';
  export let props, isVisible;
  let { img, text, textColor, bgColor } = props;

  if (!img) img = 'bart_yellow.png';
  if (!text) text = 'This page intentionally left disco.';
  if (!textColor) textColor = '#000';
  if (!bgColor) bgColor = '#fff';

  $: if (isVisible && bgColor)  {
    document.body.style.backgroundColor = bgColor;
  }

  let display = 'none';
  $: display = isVisible ? 'block' : 'none';

  let discoInterval = null;
  onDestroy(() => {
    clearInterval(discoInterval);
  });

  $: if (isVisible) {
    discoInterval = setInterval(setDivsRandomColor, 250);
  } else {
    clearInterval(discoInterval);
  }

  function setDivsRandomColor() {
    let discoDivs = document.getElementsByClassName('disco');
    for (const div of discoDivs) {
      div.style.background = randomColor();
    }
  }

  function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)})`;
  }
</script>

<div style="display: {display}">
  {#if img}<img src={img} alt={img}>{/if}
  {#if text}<h1 class="text-color" style="--text-color: {textColor}">{text}</h1>{/if}
  {#each [0, 1, 2, 3, 4] as _, i}
    {#each [0, 1, 2, 3, 4] as _, j}
      <div class="disco" style="top: {i * 20}%; left: {j * 20}%; background: {randomColor()};" />
    {/each}
  {/each}
</div>

<style>
  img {
    max-width: 35%;
  }
  .text-color {
    color: var(--text-color);
  }
  .disco {
    position: absolute;
    z-index: -1;
    width: 20%;
    height: 20%;
  }
</style>
