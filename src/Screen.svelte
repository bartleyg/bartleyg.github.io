<script>
  export let props, isVisible;
  const { img, text, textColor, bgColor } = props;

  $: if (isVisible && bgColor)  {
    document.body.style.backgroundColor = bgColor;
  }

  let display = 'none';
  $: display = isVisible ? 'block' : 'none';
</script>

<div style="display: {display}">
  {#if img}<img src={img} alt={img}>{/if}
  {#if text}<h1 class="text-color" style="--text-color: {textColor}">{text}</h1>{/if}
</div>

<style>
  .text-color {
    color: var(--text-color);
  }
</style>
