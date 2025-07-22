import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    mode: 'development',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    }
};

export default config