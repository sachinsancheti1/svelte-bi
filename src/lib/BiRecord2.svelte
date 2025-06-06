<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-record2", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10"></path>
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>

</svg>