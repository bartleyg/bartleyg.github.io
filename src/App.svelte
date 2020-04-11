<script>
	import { onMount } from "svelte";

	const imageSrc0 = "bart_yellow.png";
	const text0 = "This page intentionally left Bart.";
	let imageSrc = imageSrc0;
	let text = text0;

	const black = "#000000";
	const white = "#ffffff";
	let textColor = black;
	let bgColor = white;

	let idx = 0;
	let disco = false;
	let discoInterval = null;

	// Run changeScreen every 1 seconds
	onMount(() => setInterval(changeScreen, 1250));

	// TODO: replace all this

	// Change to the next screen in the sequence
	function changeScreen() {
		const numScreens = 4;
		idx = idx === numScreens - 1 ? 0 : idx + 1;

		switch(idx) {
			case 0:
				disco = false;
				if (discoInterval)	clearInterval(discoInterval);
				imageSrc = imageSrc0;
				text = text0;
				textColor = black;
				document.body.style.backgroundColor = white;
				break;
			case 1:
				text = "This page intentionally left black.";
				textColor = white;
				document.body.style.backgroundColor = black;
				break;
			case 2:
				imageSrc = "bart_blue.png"
				text = "This page intentionally left dank.";
				break;
			case 3:
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

<!-- TODO: add footer link to github -->
<content>
  <div id="container">
		{#if imageSrc}<img src={imageSrc} alt={imageSrc}>{/if}
		{#if text}<h2 class="page-text" style="--text-color: {textColor}">{text}</h2>{/if}
		<div class="projects">
			<h2>Projects</h2>
			<ul class="links">
				<li>
					<a href="https://my-spotify-canvas.now.sh" alt="My Spotify Canvas">
						<b>My Spotify Canvas</b> - <small>dynamically updated audio video canvas of my recently played Spotify music</small>
					</a>
				</li>
				<li>
					<a href="https://spotify-play-history.now.sh" alt="Spotify Play History">
						<b>Spotify Play History</b> - <small>see your recently played Spotify songs on mobile</small>
					</a>
				</li>
			</ul>
		</div>
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
	.projects {
		margin-top: 50px;
		background: rgba(0, 0, 0, 0.7);
		/*background-color: #2a2c37; /* grey */
	}
	.projects h2 {
		color: white;
		padding-top: 10px;
	}
	.links {
		list-style-type: none;
		padding-inline-start: 0px;
		font-size: 1.2em;
	}
	.links li {
		padding: 8px;
	}
	.links li:nth-child(1) a {
		color: #FB65B2;	/* pink */
	}
	.links li:nth-child(2) a {
		color: #72FFE4; /* blue */
	}
	.links li:nth-child(3) a {
		color: #4AFF68; /* green */
	}
	.links li:nth-child(4) a {
		color: #FEFF6E; /* yellow */
	}
	.disco {
	  position: absolute;
	  z-index: -1;
	  width: 20%;
	  height: 20%;
	}
</style>
