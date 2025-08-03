import { classNames } from '@src/shared/lib/classNames';
import * as cls from './Switcher.module.scss';
import { ChangeEvent, memo } from 'react';

interface SwitcherProps {
    className?: string;
    value: boolean;
    onSwitch: (value: boolean) => void;
}

export const Switcher = memo<SwitcherProps>((props) => {
    const { value, onSwitch, className } = props;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSwitch(event.target.checked);
    };

    return (
        <div>
            <label className={classNames(cls.switch)}>
                <input type="checkbox" checked={value} onChange={onChange} />
                <span className={classNames('', {}, [cls.slider, cls.round])} />
            </label>
        </div>
    );
});