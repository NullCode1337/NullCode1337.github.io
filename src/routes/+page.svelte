<script>
  let play = (volume) => {
    let vol = volume || 0.3;

    if (audio.currentTime == 0) {
      audio.src = "media/flower.m4a";
      audio.volume = vol;
      audio.play();
      return;
    } else {
      audio.volume = vol;
    }
  };

  function playAudio(event) {
    play();
  }

  function muteOrUnmute(event) {
    audio.muted = !audio.muted;
  }

  let value = "30";
  function changeVolume(event) {
    let newVal = String(value);

    switch (newVal.length) {
      case 2:
        newVal = Number("0." + newVal);
        break;

      case 1:
        newVal = Number("0.0" + newVal);
        break;

      default:
        newVal = 1.0;
    }

    play(newVal);
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

<div
  class="fixed p-4 mt-4 ml-4 rounded-full
  text-center text-white bg-slate-50/10 def-shadow
  backdrop-blur-xl transition delay-75 hover:bg-white/35"
>
  <button
    class="align-middle w-full h-full"
    type="button"
    aria-label="Play Music"
    id="volume"
    on:click={playAudio}
  >
    <p class="font-bold inline float-none text-white">Play&nbsp;</p>
    <i class="fa-solid fa-play align-middle inline float-none"></i>
  </button>

  <audio controls loop class="hidden" id="audio"></audio>
</div>

<div
  id="slidecontainer"
  class="align-middle fixed p-4 mt-4 ml-28 rounded-full def-shadow backdrop-blur-xl"
>
  <button
    class="align-middle"
    aria-label="Mute audio"
    id="muteButton"
    on:click={muteOrUnmute}
  >
    <i class="fa-solid fa-volume-up inline float-none"></i>
  </button>
  <input
    type="range"
    min="1"
    max="100"
    class="accent-slate-50 align-middle ml-1"
    bind:value
    on:input={changeVolume}
    id="volumeRange"
  />
</div>

<div
  id="content"
  class="absolute
  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  z-10 p-8 rounded-2xl backdrop-blur-xl shadow-3xl
  bg-black/10"
>
  <h1
    class="relative text-slate-50 pointer-events-none select-none text-4xl font-segoescr font-extrabold align-center justify-center z-20 p-0.5"
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
