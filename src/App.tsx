import { Counter } from './components/Counter';
import { UiButton } from './components/UiButton/UiButton';
import './index.scss'

export const App = () => {
    return (
        <div className="app">
            <Counter />
            <UiButton name={'hello'} />
            {/*<Counter />*/}
            {/*<Counter />*/}
            {/*<Counter />*/}
            {/*<Counter />*/}
        </div>
    )
}