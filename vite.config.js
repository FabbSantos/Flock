/**
 * @type { import('vite').UserConfig }
 */

const config = {
    root: 'src',
    build: {
        outDir: '../build',
        rollupOptions: {
            external: [
                'netlify.toml',
            ]
        },
        emptyOutDir: true,
    },
    server:{
        hmr: true,
        watch: {
            usePolling: true,
        }
    }
}

export default config;