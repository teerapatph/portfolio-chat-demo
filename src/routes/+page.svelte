<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';

	let activeTab = 'chat';
</script>

<div class="flex h-screen w-screen overflow-hidden bg-white dark:bg-gray-900">
	<Sidebar />
	<div class="flex-1 flex flex-col relative overflow-hidden">
		<Navbar />
		
		<div class="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex justify-center py-3 z-20 shrink-0">
			<div class="flex gap-1 bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
				<button 
					class="px-5 py-1.5 rounded-lg text-sm font-bold transition-all {activeTab === 'chat' ? 'bg-gray-100 dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}"
					on:click={() => activeTab = 'chat'}
				>
					Chat Interface
				</button>
				<button 
					class="px-5 py-1.5 rounded-lg text-sm font-bold transition-all {activeTab === 'dashboard' ? 'bg-gray-100 dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}"
					on:click={() => activeTab = 'dashboard'}
				>
					Admin Dashboard
				</button>
			</div>
		</div>

		<div class="flex-1 overflow-y-auto w-full h-full relative">
			{#if activeTab === 'chat'}
				<Chat />
			{:else}
				<Dashboard />
			{/if}
		</div>
	</div>
</div>
