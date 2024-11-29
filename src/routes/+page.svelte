<script>
  let value = "30";
  function playAudio(event) {
    if (audio.currentTime == 0) {
      audio.src = "media/flower.m4a";
      audio.volume = 0.5;
      audio.play();
      return;
    }
  }
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
    audio.volume = newVal;
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
  class="fixed p-4 min-w-20 min-h-20 mt-4 ml-4 max-h-0 max-w-0 rounded-full
  text-center text-white bg-slate-50/10 backdrop-blur-xl
  focus:ring-4 focus:outline-none focus:ring-slate-300 shadow-lg shadow-slate-500/50
  [&>div]:invisible [&>div]:hover:visible"
>
  <button
    class="align-middle"
    type="button"
    aria-label="Play or Pause Music"
    id="volume"
    on:click={playAudio}
  >
    <p>Play</p>
    <i class="fa-solid fa-play align-middle inline float-none"></i>
  </button>
  <div class="align-middle transition delay-150" id="slidecontainer">
    <br /> <br />
    <label for="myRange">Volume</label>
    <input
      type="range"
      min="1"
      max="100"
      class="bg-white/10"
      bind:value
      on:input={changeVolume}
    />
  </div>
  <audio controls loop class="hidden" id="audio"></audio>
</div>

<div
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-8 rounded-2xl shadow-3xl bg-black/10 backdrop-blur-xl"
  id="content"
>
  <h1
    class="relative text-slate-50 pointer-events-none text-4xl font-segoescr font-extrabold align-center justify-center z-20 p-0.5"
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
