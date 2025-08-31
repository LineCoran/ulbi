import '@src/app/styles/index.scss'

const StyleDecorator = ({ children }) => {
    return (
        <div className="app normal">
            { children }
        </div>
    )
}

export default StyleDecorator