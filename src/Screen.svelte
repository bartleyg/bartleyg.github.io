<script>
  export let props, isVisible;
  let { img, text, textColor, textClass, bgColor, bgImage } = props;

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
  {#if img}<img src={img} alt="Bartley Gillan">{/if}
  {#if text}<h2 class="text-color {textClass}" style="--text-color: {textColor}">{text}</h2>{/if}
  {#if bgImage}<div class="tiled-image" style="--bgImage: url({bgImage})"/>{/if}
</div>

<style>
  img {
    max-width: 35%;
  }
  .text-color {
    color: var(--text-color);
  }
  .outline {
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    /* -webkit-text-stroke-width: 1px; */
    /* -webkit-text-stroke-color: black; */
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
</style>
