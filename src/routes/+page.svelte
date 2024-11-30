<script>
  import { play, changeVolume } from "$lib/audioPlayer.svelte";

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
  class="align-middle fixed p-4 mt-4 ml-4 rounded-full def-shadow backdrop-blur-xl bg-slate-50/10"
>
  <button
    class="align-middle"
    aria-label="Mute audio"
    id="muteButton"
    on:click={(event) => muteOrUnmute(event)}
  >
    {#if muted}
      <i class="fa-solid fa-volume-mute inline float-none"></i>
    {:else}
      <i class="fa-solid fa-volume-up inline float-none"></i>
    {/if}
  </button>
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
  z-10 rounded-2xl p-8 backdrop-blur-xl shadow-3xl
  bg-black/10 min-w-max"
>
  <h1
    class="relative text-slate-50 pointer-events-none select-none
    text-4xl font-segoescr font-extrabold align-center justify-center z-20 p-0.5"
  >
    &lt;null&gt;
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
