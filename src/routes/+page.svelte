<script>
  import DarkMode from "$lib/DarkMode.svelte";
</script>

<svelte:head>
  <title>Home | Denza</title>
</svelte:head>

<h1>Still WIP!</h1>
<a href="/about">About Me</a>
<DarkMode />

<style>
  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
  }

  :global(body) {
    background: var(--bg-color);
    color: var(--text-color);
  }

  :global(body.dark) {
    --bg-color: #000000;
    --text-color: #ffffff;
  }
</style>
