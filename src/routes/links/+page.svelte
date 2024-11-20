<script>
  let value = "30";
  let newVal = "";
  function playAudio(event) {
    if (!audio.paused) {
      return;
    }
    audio.src = "media/flower.m4a";
    audio.volume = 0.5;
    audio.play();
  }
  function changeVolume(event) {
    console.log(String(value).length);
    newVal = String(value);
    if (newVal.length == 2) {
      newVal = "0." + newVal;
      newVal = Number(newVal);
    } else if (newVal.length == 1) {
      newVal = "0.0" + newVal;
      newVal = Number(newVal);
    } else {
      newVal = 1.0;
    }

    audio.volume = newVal;
  }
</script>

<svelte:head>
  <title>NullCode1337</title>
</svelte:head>
<video
  autoplay
  muted
  loop
  class="absolute z-0 pointer-events-none min-w-full min-h-full right-0 bottom-0 object-cover blur-lg"
>
  <source src="media/about.mp4" type="video/mp4" />
</video>

<div
  class="p-4 text-center min-w-16 min-h-16 fixed mt-4 ml-4 rounded-full backdrop-blur-xl shadow-3xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 [&>div]:invisible [&>div]:hover:visible max-h-0 max-w-0"
>
  <button
    class="align-middle"
    type="button"
    aria-label="Play or Pause Music"
    id="volume"
    on:click={playAudio}
  >
    <i class="fa-solid fa-music inline float-none"></i>
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
      on:change={changeVolume}
    />
  </div>
  <audio controls class="hidden" id="audio"></audio>
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
