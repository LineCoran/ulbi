import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { IWebpackConfigPaths } from './types/config';

export const buildPlugins = (paths: IWebpackConfigPaths) => {
    return [
        new HtmlWebpackPlugin({template: paths.template }),
        new webpack.ProgressPlugin(),
    ]
}