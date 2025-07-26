import * as classes from './UiButton.module.scss';

export const UiButton = ({ name }: { name: string }) => {
    return (<button className={classes.btn}>
        { name }
    </button>)
}