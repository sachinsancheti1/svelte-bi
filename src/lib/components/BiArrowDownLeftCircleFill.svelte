<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class:bi={true} class:bi-arrow-down-left-circle-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768z"/>
</svg>
