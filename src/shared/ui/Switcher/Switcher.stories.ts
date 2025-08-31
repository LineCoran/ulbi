import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Switcher } from './Switcher';

const meta = {
    title: 'Example/Switcher',
    component: Switcher,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitcherComponent: Story = {
};
