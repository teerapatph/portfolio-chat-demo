<script lang="ts">
	import { onMount } from 'svelte';

	let currentTheme = 'red';

	onMount(() => {
		currentTheme = localStorage.getItem('app-theme') || 'red';
		document.documentElement.setAttribute('data-theme', currentTheme);
	});

	function setTheme(theme: string) {
		currentTheme = theme;
		localStorage.setItem('app-theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
	<button class="w-6 h-6 rounded-full bg-[#FD0303] shadow-sm border-2 {currentTheme === 'red' ? 'border-gray-800 dark:border-white' : 'border-transparent'} transition-all" on:click={() => setTheme('red')} title="Red Theme"></button>
	<button class="w-6 h-6 rounded-full bg-[#054C87] shadow-sm border-2 {currentTheme === 'blue' ? 'border-gray-800 dark:border-white' : 'border-transparent'} transition-all" on:click={() => setTheme('blue')} title="Blue Theme"></button>
	<button class="w-6 h-6 rounded-full bg-[#4B0082] shadow-sm border-2 {currentTheme === 'purple' ? 'border-gray-800 dark:border-white' : 'border-transparent'} transition-all" on:click={() => setTheme('purple')} title="Purple Theme"></button>
</div>
