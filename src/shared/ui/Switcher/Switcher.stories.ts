import type { Meta } from '@storybook/react-webpack5';
import { Switcher } from './Switcher';

const meta = {
    title: 'Example/Switcher',
    component: Switcher,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Switcher>;

export default meta;