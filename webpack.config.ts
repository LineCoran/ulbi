import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: {
        template: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, "dist"),
    }, });

export default config