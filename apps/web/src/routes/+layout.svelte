<script lang="ts">
	import globalCss from '@repo/ui/app.css?url'
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
	import { ModeWatcher } from 'mode-watcher'
	import { Toaster } from 'svelte-sonner'

	const { children } = $props()

	const queryClient = new QueryClient()

	// Listen for flash messages in the URL
</script>

<svelte:head>
	<link rel="stylesheet" href={globalCss} />
</svelte:head>

<QueryClientProvider client={queryClient}>
	{@render children()}
</QueryClientProvider>

<Toaster richColors position="top-right" />
<ModeWatcher />
<SvelteQueryDevtools client={queryClient} buttonPosition="bottom-right" />
