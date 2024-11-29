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

  // unused function; might use later
  export function muteOrUnmute(event) {
    audio.muted = !audio.muted;
  }

  export function changeVolume(event, value, file) {
    let newVal = String(value);
    if (file === undefined) {
      file = "";
    }
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

    play(event, file, newVal);
    audio.muted = false;
  }
</script>

/* eslint-disable no-unused-vars */ /* eslint-disable no-undef */
