<script lang="ts">
	import { messages, isTyping } from '../stores';
	
	let inputMessage = '';
	let chatContainer: HTMLElement;

	function scrollToBottom() {
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 50);
	}

	async function sendMessage() {
		if (!inputMessage.trim() || $isTyping) return;
		
		const text = inputMessage.trim();
		inputMessage = '';
		
		// Add user message
		messages.update(m => [...m, { id: Date.now().toString(), role: 'user', content: text }]);
		scrollToBottom();
		
		// Trigger mock AI response
		isTyping.set(true);
		
		setTimeout(() => {
			messages.update(m => [...m, { 
				id: Date.now().toString(), 
				role: 'assistant', 
				content: `This is a simulated response to: "${text}". Notice how the styling adapts to the active theme!` 
			}]);
			isTyping.set(false);
			scrollToBottom();
		}, 1000);
	}
</script>

<div class="flex-1 flex flex-col h-full relative overflow-hidden bg-white dark:bg-gray-900">
	<div class="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth" bind:this={chatContainer}>
		{#each $messages as msg (msg.id)}
			{#if msg.role === 'user'}
				<div class="flex w-full justify-end gap-3">
					<div class="bg-gray-100 dark:bg-gray-800 rounded-3xl px-5 py-3 max-w-[80%] text-gray-800 dark:text-gray-100 shadow-sm border border-gray-200 dark:border-gray-700">
						{msg.content}
					</div>
					<div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-800 dark:text-white text-xs font-bold shrink-0">U</div>
				</div>
			{:else}
				<div class="flex w-full justify-start gap-3">
					<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 transition-colors">AI</div>
					<div class="space-y-2 max-w-[80%]">
						<div class="text-sm font-semibold text-gray-800 dark:text-gray-100">AI Assistant</div>
						<div class="text-gray-700 dark:text-gray-300 leading-relaxed">
							{msg.content}
						</div>
					</div>
				</div>
			{/if}
		{/each}

		{#if $isTyping}
			<div class="flex w-full justify-start gap-3">
				<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 transition-colors">AI</div>
				<div class="space-y-2 max-w-[80%]">
					<div class="text-sm font-semibold text-gray-800 dark:text-gray-100">AI Assistant</div>
					<div class="text-gray-500 dark:text-gray-400 animate-pulse flex items-center gap-1 mt-2">
						<div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
						<div class="w-1.5 h-1.5 bg-gray-400 rounded-full animation-delay-200"></div>
						<div class="w-1.5 h-1.5 bg-gray-400 rounded-full animation-delay-400"></div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="p-4 w-full bg-white dark:bg-gray-900 z-10 border-t border-transparent">
		<div class="max-w-3xl mx-auto flex items-end gap-2 bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-3xl p-2 shadow-sm focus-within:ring-1 focus-within:ring-primary transition-all">
			<textarea 
				bind:value={inputMessage} 
				on:keydown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
				class="flex-1 max-h-32 bg-transparent px-3 py-2.5 outline-none resize-none text-gray-800 dark:text-gray-100 text-sm" 
				rows="1" 
				placeholder="Send a message..."></textarea>
			<button 
				on:click={sendMessage}
				disabled={$isTyping || !inputMessage.trim()}
				class="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-full p-2 transition-colors flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" /></svg>
			</button>
		</div>
		<div class="text-center text-xs text-gray-400 mt-2">This is a frontend-only portfolio demo.</div>
	</div>
</div>
