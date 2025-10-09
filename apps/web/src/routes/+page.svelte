<script lang="ts">
	import { resolve } from '$app/paths'
	import { Link } from '@repo/ui/link'
</script>

<svelte:head>
	<title>Web</title>
</svelte:head>

<div
	class="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center justify-center px-4 sm:px-6"
>
	<h1 class="mb-4 text-5xl font-bold tracking-tight">
		Welcome to epicenter.sh
	</h1>
	<p class="text-muted-foreground mb-8 text-center">
		Get started by running this command in your terminal:
	</p>

	<p class="text-muted-foreground text-center text-sm">
		This will start your OpenCode server and open epicenter.sh with your
		assistant pre-configured.
	</p>

	<p class="text-muted-foreground text-center text-sm">
		<Link href={resolve('/faq')}>Learn how it works</Link> under the hood.
	</p>
</div>
