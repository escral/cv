import { defineConfig } from 'vite'
import * as path from 'node:path'

export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
            '~tests': path.resolve(__dirname, './tests'),
        },
    },

    plugins: [

    ],
})
