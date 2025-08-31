import { Button } from '@src/shared/ui';
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('should render correctly', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>test</Button>);
        expect(screen.getByText('Button test')).toBeInTheDocument();
    })
    test('should render correctly', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button className={'clean'}>test</Button>);
        expect(screen.getByText('Button test')).toHaveClass('clean');
    })
})