<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-boombox", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path>
  <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path>
  <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
  <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z"></path>

</svg>