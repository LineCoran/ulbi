export const buildLoaders = () => {
    return [
        {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        },
    ]
}