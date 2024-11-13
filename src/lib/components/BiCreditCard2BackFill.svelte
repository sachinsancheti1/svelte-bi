<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class:bi={true} class:bi-credit-card-2-back-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"/>
</svg>
