import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@src/shared/providers/ThemeProvieder';

const app = document.getElementById('app')


render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>, app)