import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.orange.800'),
                            textDecoration: "none",
                            cursor: "pointer",
                            '&:hover': {
                                color: theme('colors.amber.950'),
                                textDecoration: "underline",
                            },
                        },
                    },
                },
            }),
        },
	},

	plugins: [typography]
} satisfies Config;
