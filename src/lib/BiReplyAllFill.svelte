<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-reply-all-fill", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M8.021 11.9 3.453 8.62a.72.72 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
  <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945l-.042.028a.147.147 0 0 0 0 .252l.042.028 4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106"></path>

</svg>