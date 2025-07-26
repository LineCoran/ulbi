export interface IWebpackConfigPaths {
    template: string;
    output: string;
    entry: string;
}

export interface IWebpackConfigOptions {
    mode: 'development' | 'production';
    paths: IWebpackConfigPaths;
}