<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-filetype-mdx", cls]} viewBox="0 0 16 16" {...rest}>
    
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM.706 15.849v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596h-.026L.805 11.85H0v3.999zm3.559-3.999v3.999h1.459q.603 0 .999-.237a1.45 1.45 0 0 0 .595-.689q.195-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.59-.68q-.395-.234-1.004-.234zm.79.645h.563q.372 0 .61.152a.9.9 0 0 1 .354.454q.117.302.117.753 0 .34-.067.592a1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.484.082h-.562v-2.707Zm4.787-.645h.894L9.46 13.857l1.254 1.992h-.908l-.85-1.415h-.035l-.852 1.415h-.862l1.24-2.016L7.22 11.85h.932l.832 1.439h.035z"></path>

</svg>