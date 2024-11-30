<script>
  import { play, changeVolume } from "$lib/AudioPlayer.svelte";
  import Icons from "$lib/Icons.svelte";

  let audioFileDir = "media/flower.m4a";
  let value = "40";
  let muted = true;

  function changeVlm(event) {
    console.log(value);
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

<video
  autoplay
  muted
  loop
  class="absolute z-0 min-w-full min-h-full right-0 bottom-0
  object-cover blur-lg pointer-events-none"
>
  <source src="media/about.mp4" type="video/mp4" />
</video>

<audio controls loop class="hidden" id="audio"></audio>

<div
  id="slidecontainer"
  class="align-middle fixed p-4 mt-4 ml-4 rounded-full def-shadow backdrop-blur-xl bg-slate-50/10 min-h-max"
>
  <label for="muteButton">
    {#if muted}
      <i class="fa-solid fa-volume-mute inline float-none"></i>
    {:else}
      <i class="fa-solid fa-volume-up inline float-none"></i>
    {/if}
  </label>

  <input
    type="checkbox"
    class="align-middle hidden"
    aria-label="Mute audio"
    aria-checked="true"
    checked="checked"
    tabindex="0"
    id="muteButton"
    on:keydown={(event) => muteOrUnmute(event)}
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
    <a
      aria-label="Add NullCode on Discord"
      class="inline float-right pr-2"
      href="https://discord.com/invite/4CRGnuHZ"
    >
      <Icons name="Discord" class="invert" />
    </a>
  </h1>
  <hr />
  <br />
  <h2>Python, Golang, Web Developer</h2>
  <!-- <h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque
    perferendis est molestias eius ipsa quaerat dolore doloribus, veritatis
    ratione tempore voluptatem dolorem culpa blanditiis illo iusto voluptates,
    quia sit?
  </h2> -->
</div>

<style>
  /* Make volume slider hide until hovered */
  /* Only on mobile */
  @media (max-width: 768px) {
    #muteButton:checked ~ #volumeRange {
      display: none;
    }
  }
</style>
