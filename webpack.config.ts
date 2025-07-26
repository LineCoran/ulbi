import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IWebpackConfigPaths } from './config/build/types/config';

export default (env: IBuildEnv) => {

    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const paths: IWebpackConfigPaths = {
        template: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, "dist"),
        public: path.resolve(__dirname, "public"),
    }

    const isDev = mode === 'development'

    return {
        ...buildWebpackConfig({
            mode,
            port,
            paths,
            isDev,
        })
    }
}