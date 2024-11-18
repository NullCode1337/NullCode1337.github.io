<script>
  let darkMode = false;
  const toggle = () => {
    darkMode = !darkMode;
    window.document.body.classList.toggle("dark");
  };
</script>

<button
  class="bg-indigo-500 border-2 border-solid rounded-md pt-10 pb-10 pl-15 pr-15 text-amber-200"
  on:click={toggle}
>
  {#if darkMode}
    ☀️
  {:else}
    🌙
  {/if}
</button>
