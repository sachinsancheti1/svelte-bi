<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-4-square", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"></path>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"></path>

</svg>