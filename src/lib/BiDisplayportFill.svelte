<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-displayport-fill", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"></path>

</svg>