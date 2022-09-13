import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: 'index.html'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'tijak/index.js'),
      name: 'Tijak',
      // the proper extensions will be added
      fileName: 'tijak'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/sass/variables.scss";
          @import "/src/sass/mixins.scss";`
      }
    }
  },
  
})

