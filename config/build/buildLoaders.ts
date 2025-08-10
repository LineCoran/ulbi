import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IWebpackConfigOptions } from './types/config';

export const buildLoaders = (options: IWebpackConfigOptions) => {

    const { isDev } = options;

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => {
                            return resourcePath.includes('.module.')
                        },
                        localIdentName: isDev ? '[path][name]__[local]__[hash:base64:8]' : '[hash:base64:8]',
                    },
                },

            },
            'sass-loader',
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader =     {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ]
}