<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-ev-station", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path d="M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm2.131 10.46H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764z"></path>
  <path d="M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V4a.5.5 0 0 0-.146-.354l-.5-.5a.5.5 0 0 0-.707 0l-.5.5A.5.5 0 0 0 13 4v3c0 .71.38 1.096.636 1.357l.007.008c.253.258.357.377.357.635v3.5a.5.5 0 1 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"></path>

</svg>