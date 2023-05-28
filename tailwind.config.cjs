module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  theme: {
    extend: {
      // Your customizations
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'luxury': {                          // theme name
          'primary': '#af9e83',
          'primary-focus': '#bfa58a',
          'primary-content': '#ffffff',
          'secondary': '#4a4a4a',
          'secondary-focus': '#616161',
          'secondary-content': '#ffffff',
          'accent': '#af9e83',
          'accent-focus': '#bfa58a',
          'accent-content': '#ffffff',
          'neutral': '#4a4a4a',
          'neutral-focus': '#616161',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',              // base color for component
          'base-200': '#f5f5f5',
          'base-300': '#eeeeee',
          'base-content': '#1f2937',           // base text color
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ]
  },
}

