import { Configuration as WebpackServerConfiguration } from "webpack-dev-server"
import { IWebpackConfigOptions } from './types/config';

export const buildDevServer = (options: IWebpackConfigOptions): WebpackServerConfiguration => {
    const { port } = options
    return  {
        port,
        static: {
            directory: options.paths.public,
        },
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}