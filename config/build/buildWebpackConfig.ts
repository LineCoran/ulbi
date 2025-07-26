import { IWebpackConfigOptions } from './types/config';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig  = (options: IWebpackConfigOptions) => {
    const { mode, paths } = options
    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}