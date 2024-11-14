<script lang="ts">
  import Bi from "$lib/Bi.svelte";
</script>

<svelte:head>
  <title>Page</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
</svelte:head>
<h2>Bi</h2>

<Bi name="0-circle" />
<Bi name="0-circle" svg size="43" />

<Bi name="amazon" svg size="64" />

<Bi name="github" svg size="128" />

<Bi name="github" svg size="128" fill="red" />

<Bi name="github" style="color: tomato; font-size: 15rem;" />
