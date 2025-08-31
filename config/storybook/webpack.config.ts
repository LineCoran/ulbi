import webpack from 'webpack'
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {

    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
        '@src': path.resolve(__dirname, '..', '..', 'src'),
    }

    const cssLoader = buildCssLoader(true);

    config.module.rules.push(cssLoader);
    return config;
}