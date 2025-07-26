import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { IWebpackConfigPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (paths: IWebpackConfigPaths) => {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({template: paths.template }),
        new webpack.ProgressPlugin(),
    ]
}