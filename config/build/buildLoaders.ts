export const buildLoaders = () => {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoader,
    ]
}