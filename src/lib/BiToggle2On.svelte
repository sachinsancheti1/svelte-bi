<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-toggle2-on={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1"></path>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0"></path>

</svg>