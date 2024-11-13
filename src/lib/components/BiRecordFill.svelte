<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class:bi={true} class:bi-record-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
</svg>
