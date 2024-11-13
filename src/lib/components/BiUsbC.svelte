<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class:bi={true} class:bi-usb-c={true} class={klass} viewBox="0 0 16 16" {...rest}>
    <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/> <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z"/>
</svg>
