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

  const screenTime = 1250;  // num milliseconds for each screen to display
  const screens = [
    // [Screen, {
    //   'text': "This page intentionally left black.",
    //   'textColor': white,
    //   'bgColor': black,
    // }],
    [Screen, {
      'img': "bart_yellow.png",
      'text': "This page intentionally left Bart.",
      'textColor': black,
      'bgColor': white,
    }],
    [Screen, {
      'img': "bart_blue.png",
      'text': "This page intentionally left dank.",
      'textColor': white,
      'bgColor': black,
    }],
    [Sunset, {
      'text': "This page intentionally sunsetting.",
      'textColor': white,
      'screenTime': screenTime,
    }],
    [Disco, {
      'textColor': white,
    }],
    [Screen, {
      'text': "This page intentionally left nyan cat.",
      'textColor': yellow,
      'textClass': 'outline',
      'bgImage': '/nyan-cat.gif',
    }],
    [Screen, {
      'text': "This page intentionally left party parrot.",
      'textColor': white,
      'textClass': 'outline',
      'bgColor': grey,
      'bgImage': '/party-parrot.gif',
    }],
  ];

  // Change the screen
  let indexOn = 0;
  setInterval(() => {
    indexOn = (indexOn === screens.length - 1) ? 0 : indexOn + 1;
  }, screenTime);
</script>


<main class="content">
  <article>
    <h1>Bartley Gillan</h1>
    {#each screens as [screen, props], i}
      <svelte:component this={screen} {props} isVisible="{i === indexOn}" />
    {/each}

    <div class="projects">
      <h2>
        <a href="https://github.com/bartleyg" target="_blank" rel="noopener noreferrer">
          Projects
        </a>
      </h2>

      <ul class="links">
        <li>
          <a href="https://my-spotify-canvas.vercel.app" alt="My Spotify Canvas">
            <b>My Spotify Canvas</b> - <small>dynamically updated audio video canvas of my recently played Spotify music</small>
          </a>
        </li>
        <li>
          <a href="https://my-spotify-mosaic.vercel.app" alt="My Spotify Mosaic">
            <b>My Spotify Mosaic</b> - <small>dynamically updated mosaic of my recently played Spotify music</small>
          </a>
        </li>
        <li>
          <a href="https://spotify-play-history.vercel.app" alt="Spotify Play History">
            <b>Spotify Play History</b> - <small>see your recently played Spotify songs on mobile</small>
          </a>
        </li>
      </ul>
    </div>

    <p class="footer">
      <a href="https://github.com/bartleyg" target="_blank" rel="noopener noreferrer">
        Made with
        <span role="img" aria-label="red heart">❤️</span>
        &nbsp;by Bartley Gillan
      </a>
    </p>
  </article>
</main>

<style>
  .content {
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin-top: -48.92px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .projects {
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
  }
  .projects h2 {
    padding-top: 10px;
  }
  .projects h2 a {
    color: white;
  }
  .links {
    list-style-type: none;
    padding-inline-start: 0px;
    font-size: 1.2em;
  }
  .links li {
    padding: 8px;
  }
  .links li:last-child {
    padding-bottom: 15px;
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
  .footer {
    margin-top: 30px;
    font-size: 12px;
  }
  .footer a {
    color: white;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
</style>
