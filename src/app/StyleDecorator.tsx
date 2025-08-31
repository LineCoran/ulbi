import '@src/app/styles/index.scss'
import { FC } from 'react';

const StyleDecorator: FC = ({ children }) => {
    return (
        <div className="app normal">
            { children }
        </div>
    )
}

export default StyleDecorator