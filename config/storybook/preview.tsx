import type { Preview } from '@storybook/react-webpack5'
import StyleDecorator from '../../src/app/StyleDecorator'

const preview: Preview = {
    decorators: [
        // 👇 Defining the decorator in the preview file applies it to all stories
        (Story, { parameters }) => {
            // 👇 Make it configurable by reading from parameters
            return (
                <StyleDecorator>
                    <Story />
                </StyleDecorator>
            )
        },
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

// addDe(StyleDecorator)
export default preview;