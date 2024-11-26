<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-align-top={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"></rect>
  <path d="M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z"></path>

</svg>