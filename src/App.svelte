<script>
  import Screen from './Screen.svelte';
  import Disco from './Disco.svelte';
  import Sunset from './Sunset.svelte';

  const black = '#000';
  const white = '#fff';
  const grey = '#2a2c37';
  const pink = '#FB65B2';
  const blue = '#72FFE4';
  const green = '#4AFF68';
  const yellow = '#FEFF6E';

  const screens = [
    [Screen, {
      'img': "bart_yellow.png",
      'text': "This page intentionally left Bart.",
      'textColor': black,
      'bgColor': white,
    }],
    // [Screen, {
    //   'text': "This page intentionally left black.",
    //   'textColor': white,
    //   'bgColor': black,
    // }],
    [Screen, {
      'img': "bart_blue.png",
      'text': "This page intentionally left dank.",
      'textColor': white,
      'bgColor': black,
    }],
    [Sunset, {
      'text': "This page intentionally left sunset.",
      'textColor': white,
    }],
    [Disco, {
      'textColor': white,
    }],
    [Screen, {
      'text': "This page intentionally left nyan cat.",
      'textColor': yellow,
      'bgImage': '/nyan-cat.gif',
    }],
    [Screen, {
      'text': "This page intentionally left party parrot.",
      'textColor': white,
      'bgColor': grey,
      'bgImage': '/party-parrot.gif',
    }],
  ];

  // Change the screen every num milliseconds
  let indexOn = 0;
  setInterval(() => {
    indexOn = (indexOn === screens.length - 1) ? 0 : indexOn + 1;
  }, 1250);
</script>


<!-- TODO: add footer link to github -->
<div class="content">
  <div>
    {#each screens as [screen, props], i}
      <svelte:component this={screen} {props} isVisible="{i === indexOn}" />
    {/each}

    <div class="projects" id="projects">
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

  </div>
</div>

<style>
  .content {
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .projects {
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.7);
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
    color: #FB65B2;  /* pink */
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
</style>
