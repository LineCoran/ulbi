import './UiButton.scss';

export const UiButton = ({ name }: { name: string }) => {
    return <button className="ui-button">
        { name }
    </button>
}