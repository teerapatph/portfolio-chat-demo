import { writable } from 'svelte/store';

export const user = writable({
	name: 'Demo User',
	role: 'admin',
	profile_image_url: '/user.png'
});

export const chats = writable([
	{ id: '1', title: 'Example Chat 1', created_at: Date.now() },
	{ id: '2', title: 'Example Chat 2', created_at: Date.now() }
]);

export const messages = writable([
	{ id: 'm1', role: 'assistant', content: 'Hello! I am your AI assistant. Send me a message and watch the UI respond!' }
]);

export const isTyping = writable(false);
