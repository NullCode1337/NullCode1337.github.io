<script context="module">
  export function play(event, file, volume) {
    let vol = volume || 0.3;

    if (file === "") {
      audio.volume = vol;
    }
    if (audio.currentTime == 0) {
      audio.src = file;
      audio.volume = vol;
      audio.play();
      return;
    } else {
      audio.volume = vol;
    }
  }

  export function playAudio(event, file) {
    play(event, file);
  }

  export function muteOrUnmute(event) {
    audio.muted = !audio.muted;
  }

  export function changeVolume(event, value) {
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

    play(event, "", newVal);
  }
</script>

/* eslint-disable no-unused-vars */ /* eslint-disable no-undef */
