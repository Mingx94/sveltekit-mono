<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements'
	import { cn } from '#/utils/utils'

	const { children, class: className, ...rest }: HTMLAnchorAttributes = $props()
</script>

<a
	{...rest}
	class={cn(
		'text-foreground font-medium underline underline-offset-4',
		className,
	)}
>
	{@render children?.()}
</a>
