<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-cloud-moon-fill", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"></path>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"></path>

</svg>