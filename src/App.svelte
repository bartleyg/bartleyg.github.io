<script>
	import { onMount } from "svelte";

	let imageSrc = null;
	let text = "This page intentionally left blank.";

	const black = "#000000";
	const white = "#ffffff";

	let textColor = black;
	let bgColor = white;

	let idx = 0;
	let disco = false;
	let discoInterval = null;

	// Run changeScreen every 2 seconds
	onMount(() => setInterval(changeScreen, 2000));

	// Change to the next screen in the sequence
	function changeScreen() {
		const numScreens = 5;
		idx = idx === numScreens - 1 ? 0 : idx + 1;

		switch(idx) {
			case 0:
				disco = false;
				if (discoInterval)	clearInterval(discoInterval);
				imageSrc = null;
				text = "This page intentionally left blank.";
				textColor = black;
				document.body.style.backgroundColor = white;
				break;
			case 1:
				imageSrc = "bart_yellow.png"
				text = "This page intentionally left Bart.";
				break;
			case 2:
				text = "This page intentionally left black.";
				textColor = white;
				document.body.style.backgroundColor = black;
				break;
			case 3:
				imageSrc = "bart_blue.png"
				text = "This page intentionally left dank.";
				break;
			case 4:
				text = "This page intentionally left disco.";
				disco = true;
				// change color tiles every 0.3 seconds
			  discoInterval = setInterval(setDivsRandomColor, 300);
				break;
		}
	}

	function setDivsRandomColor() {
		let discoDivs = document.getElementsByClassName("disco");
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

<content>
  <div id="container">
		{#if imageSrc}<img src={imageSrc} alt={imageSrc}>{/if}
		{#if text}<h2 class="page-text" style="--text-color: {textColor}">{text}</h2>{/if}
		{#if disco}
			{#each [0, 1, 2, 3, 4] as _, i}
				{#each [0, 1, 2, 3, 4] as _, j}
					<div class="disco" style="top: {i * 20}%; left: {j * 20}%; background: {randomColor()};" />
				{/each}
			{/each}
		{/if}
	</div>
</content>

<style>
	content {
	  text-align: center;
	  display: flex;
	  height: 100vh;
	  align-items: center;
	  justify-content: center;
	}

	.page-text {
		color: var(--text-color);
	}

	.disco {
	  position: absolute;
	  z-index: -1;
	  width: 20%;
	  height: 20%;
	}
</style>
