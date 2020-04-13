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

<!-- TODO: add outline option to text for legibility -->
<div style="display: {display}">
  {#if img}<img src={img} alt={img}>{/if}
  {#if text}<h1 class="text-color" style="--text-color: {textColor}">{text}</h1>{/if}
  {#if bgImage}<div class="tiled-image" style="--bgImage: url({bgImage})"/>{/if}
</div>

<style>
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
</style>
