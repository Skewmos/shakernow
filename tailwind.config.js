import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
      extend: {},
      container: {
         center: true,
         padding: '2rem',
      },
   },
   plugins: [flowbitePlugin],
};
