<script>
  import { play, changeVolume } from "$lib/AudioPlayer.svelte";
  import Icons from "$lib/Icons.svelte";
  import copy from "copy-to-clipboard";

  let audioFileDir = "media/heartbreak.mp3";
  let value = "40";
  let muted = true;

  function changeVlm(event) {
    if (value == "1") {
      audio.muted = true;
      muted = true;
      return;
    }
    if (audio.currentTime == 0 || value != "1") {
      muted = false;
    }
    changeVolume(event, value, audioFileDir);
  }

  function muteOrUnmute(event) {
    if (event.type === "keypress") {
      if (event.code == "Space" || event.code != "KeyM") {
        return; // let PointerEvent handle spaces; ignore all else
      }
    }
    if (audio.currentTime == 0) {
      play(event, audioFileDir);
      muted = false;
      return;
    }
    muted = true ? !audio.muted : false;
    audio.muted = !audio.muted;
    if (muted) {
      value = "1";
    } else {
      value = "40";
    }
  }
</script>

<svelte:head>
  <title>@nullcode1337 | Denza</title>
</svelte:head>

<!-- <video
  autoplay
  muted
  loop
  class="absolute z-0 min-w-full min-h-full right-0 bottom-0
  object-cover blur-lg pointer-events-none"
>
  <source src="media/about.mp4" type="video/mp4" />
</video> -->

<audio controls loop class="hidden" id="audio"></audio>

<div
  id="slidecontainer"
  class="align-middle fixed p-4 md:px-5 md:py-4 mt-4 ml-4 rounded-full def-shadow backdrop-blur-xl bg-slate-50/10 min-h-max"
>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <label for="muteButton">
    {#if muted}
      <i class="fa-solid fa-volume-mute fa-lg lg:fa-xl inline float-none"></i>
    {:else}
      <i class="fa-solid fa-volume-up fa-lg lg:fa-xl inline float-none"></i>
    {/if}
  </label>

  <input
    type="checkbox"
    class="align-middle absolute z-0 opacity-0 float-none"
    aria-label="Mute audio"
    aria-checked="true"
    checked="checked"
    id="muteButton"
    on:keypress={(event) => muteOrUnmute(event)}
    on:click={(event) => muteOrUnmute(event)}
  />

  <input
    type="range"
    min="1"
    max="100"
    bind:value
    class="accent-slate-50 align-middle ml-1"
    on:input={(event) => changeVlm(event)}
    id="volumeRange"
  />
</div>

<div
  id="content"
  class="absolute
  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  z-10 rounded-2xl p-8 backdrop-blur-xl shadow-3xl bg-black/10
  w-4/5 ml-auto mr-auto md:w-1/2 md:min-w-max"
>
  <h1
    class="relative text-slate-50 font-segoescr font-extrabold
    text-4xl align-center justify-center z-20 p-0.5"
  >
    <span class="pointer-events-none select-none">&lt;null&gt;</span>
    <a
      aria-label="NullCode's GitHub"
      class="inline float-right"
      href="https://github.com/NullCode1337"
    >
      <Icons name="GitHub" class="invert" />
    </a>
  </h1>
  <br />
  <h2>I thought it'd be cool to have a portfolio site</h2>
  <!-- <h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque
    perferendis est molestias eius ipsa quaerat dolore doloribus, veritatis
    ratione tempore voluptatem dolorem culpa blanditiis illo iusto voluptates,
    quia sit?
  </h2> -->
</div>

<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
</div>

<style>
  /* Make volume slider hide until hovered */
  /* Only on mobile */
  @media (max-width: 768px) {
    #muteButton:checked ~ #volumeRange {
      display: none;
    }
  }

  /* customizable snowflake styling */
  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
  }

  .snowflake,
  .snowflake .inner {
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
  @keyframes snowflakes-fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(110vh);
    }
  }
  @keyframes snowflakes-shake {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80px);
    }
  }
  .snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
    pointer-events: none;
    animation-name: snowflakes-shake;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
  }
  .snowflake .inner {
    animation-duration: 10s;
    animation-name: snowflakes-fall;
    animation-timing-function: linear;
  }
  .snowflake:nth-of-type(0) {
    left: 1%;
    animation-delay: 0s;
  }
  .snowflake:nth-of-type(0) .inner {
    animation-delay: 0s;
  }
  .snowflake:first-of-type {
    left: 10%;
    animation-delay: 1s;
  }
  .snowflake:first-of-type .inner,
  .snowflake:nth-of-type(8) .inner {
    animation-delay: 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    animation-delay: 0.5s;
  }
  .snowflake:nth-of-type(2) .inner,
  .snowflake:nth-of-type(6) .inner {
    animation-delay: 6s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    animation-delay: 2s;
  }
  .snowflake:nth-of-type(11) .inner,
  .snowflake:nth-of-type(3) .inner {
    animation-delay: 4s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    animation-delay: 2s;
  }
  .snowflake:nth-of-type(10) .inner,
  .snowflake:nth-of-type(4) .inner {
    animation-delay: 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    animation-delay: 3s;
  }
  .snowflake:nth-of-type(5) .inner {
    animation-delay: 8s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    animation-delay: 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    animation-delay: 1s;
  }
  .snowflake:nth-of-type(7) .inner {
    animation-delay: 2.5s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    animation-delay: 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    animation-delay: 1.5s;
  }
  .snowflake:nth-of-type(9) .inner {
    animation-delay: 3s;
  }
  .snowflake:nth-of-type(10) {
    left: 25%;
    animation-delay: 0s;
  }
  .snowflake:nth-of-type(11) {
    left: 65%;
    animation-delay: 2.5s;
  }
</style>
