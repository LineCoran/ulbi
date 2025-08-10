import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@src/shared/providers/ThemeProvieder';
import '@src/shared/config/i18n/i18n';
import { ErrorBoundary } from '@src/widgets/ErrorBoundary';

const app = document.getElementById('app')


render(

    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>
    , app)