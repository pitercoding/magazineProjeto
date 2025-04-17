import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Config} */
export default {
  plugins: [
    tailwindcss(),
    autoprefixer({
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    }),
  ],
};


