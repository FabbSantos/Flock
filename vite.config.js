/**
 * @type { import('vite').UserConfig }
 */

const config = {
    root: 'src',
    build: {
        outDir: '../build',
    },
    server:{
        hmr: true,
        watch: {
            usePolling: true,
        }
    }
}

export default config;