<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-sign-no-right-turn", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.416 5.29L6.596 7.304A1.5 1.5 0 0 0 6 8.5V11H5V8.5c0-.765.344-1.45.885-1.908L2.709 3.416a7 7 0 0 0 9.874 9.874Zm.707-.706A7 7 0 0 0 3.417 2.71l3.388 3.388Q7.137 6.001 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658l-.026.02zM7.707 7 9 8.293V7z"></path>

</svg>