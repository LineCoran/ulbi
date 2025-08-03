import { IWebpackConfigOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig  = (options: IWebpackConfigOptions) => {
    const { mode, paths, isDev } = options
    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
            chunkFilename: '[name].[contenthash].chunk.js',
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}