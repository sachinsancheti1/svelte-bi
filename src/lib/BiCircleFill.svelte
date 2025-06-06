<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-circle-fill", cls]} viewBox="0 0 16 16" {...rest}>
    
  <circle cx="8" cy="8" r="8"></circle>

</svg>