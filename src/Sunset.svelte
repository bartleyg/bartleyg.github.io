<script>
  export let props, isVisible;
  let { img, text, textColor, bgColor, bgImage } = props;

  // Defaults if not in props
  if (!img) img = 'bart_yellow.png';
  if (!text) text = 'This page intentionally left Bart.';
  if (!textColor) textColor = '#000';
  if (!bgColor) bgColor = '#fff';

  $: if (isVisible && bgColor)  {
    document.body.style.backgroundColor = bgColor;
  }

  let display = 'none';
  $: display = isVisible ? 'block' : 'none';
</script>

<div style="display: {display}">
  {#if img}<img src={img} alt={img}>{/if}
  {#if text}<h1 class="text-color" style="--text-color: {textColor}">{text}</h1>{/if}
  {#if bgImage}<div class="tiled-image" style="--bgImage: url({bgImage})"/>{/if}
  <div class="sunset-gradient"/>
</div>

<style>
  img {
    max-width: 35%;
  }
  .text-color {
    color: var(--text-color);
  }
  .tiled-image {
    position: fixed;
    top: 0;
		left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: var(--bgImage);
    background-repeat: repeat;
    background-position: center center;
  }
  .sunset-gradient {
    position: fixed;
    top: 0;
		left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(180deg, rgba(71,129,236,1) 0%, rgba(224,106,157,1) 70%, rgba(255,199,73,1) 100%);
  }
</style>
