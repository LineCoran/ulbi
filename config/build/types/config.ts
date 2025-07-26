export interface IWebpackConfigPaths {
    template: string;
    output: string;
    entry: string;
    public: string
}

type TMode = 'development' | 'production';

export interface IWebpackConfigOptions {
    mode: TMode;
    paths: IWebpackConfigPaths;
    port: number;
    isDev: boolean;
}

export interface IBuildEnv {
    port: number;
    mode: TMode;
}