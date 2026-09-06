<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="w-full px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-30">
	<div class="flex items-center gap-4">
		<div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-xl text-sm text-gray-800 dark:text-gray-100 font-medium shadow-sm hover:bg-gray-100 dark:hover:bg-gray-750 transition cursor-pointer">
			demo-model
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
		<div class="text-lg font-semibold text-gray-700 dark:text-gray-200 hidden sm:block">
			Demo Interface
		</div>
	</div>
	
	<div class="flex items-center gap-4">
		<ThemeToggle />
		<div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-bold border border-gray-300 dark:border-gray-600">
			U
		</div>
	</div>
</div>
