import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
				  DEFAULT: "hsl(var(--primary))",
				  foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
				  DEFAULT: "hsl(var(--secondary))",
				  foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
				  DEFAULT: "hsl(var(--destructive))",
				  foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
				  DEFAULT: "hsl(var(--muted))",
				  foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
				  DEFAULT: "hsl(var(--accent))",
				  foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
				  DEFAULT: "hsl(var(--popover))",
				  foreground: "hsl(var(--popover-foreground))",
				},
				card: {
				  DEFAULT: "hsl(var(--card))",
				  foreground: "hsl(var(--card-foreground))",
				},
				beige: {
				  50: '#FAF3E0',    // Very Light Beige
				  100: '#F5F5DC',   // Light Beige
				  200: '#EDE6D5',   // Medium Light Beige
				  300: '#D9CBAE',   // Light Beige
				  400: '#C2BFA1',   // Regular Beige
				  500: '#D9BE8C',   // Medium Beige
				  600: '#D0B687',   // Darker Beige
				  700: '#7E4B2A',   // Dark Beige
				  800: '#5C3722',   // Very Dark Beige
				  900: '#3C2420',   // Deep Beige
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'home': "url('/home/home.png')",
			},
			keyframes: {
				'card-appear': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
			animation: {
				card: '2s ease-in-out 0.01s forwards card-appear',
			},
			height: {
				'home': 'calc(100vh - 57px)',
			},
		},
	},
	plugins: [],
};
export default config;
