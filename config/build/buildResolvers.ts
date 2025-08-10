import { IWebpackConfigOptions } from './types/config';

export const buildResolvers = (options: IWebpackConfigOptions)  => {
    return {
        extensions: ['.ts', '.js', '.tsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@src': options.paths.src,
        }
    }
}