import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IWebpackConfigPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

export const buildPlugins = (paths: IWebpackConfigPaths, isDev: boolean) => {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({ template: paths.template }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
        new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin({ analyzerMode: 'disabled' }),
    ].filter(Boolean)
}