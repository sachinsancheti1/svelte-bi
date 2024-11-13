<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class:bi={true} class:bi-magnet-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    <path d="M15 12h-4v3h4zM5 12H1v3h4zM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0z"/>
</svg>
