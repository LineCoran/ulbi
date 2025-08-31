import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'Button',
    },
};
