/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				'primary-dark': 'var(--color-primary-dark)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)'
			}
		}
	}
};
