import { Button } from '@src/shared/ui';
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('should render correctly', () => {
        render(<Button>Button test</Button>);
        expect(screen.getByText('Button test')).toBeInTheDocument();
    })
    test('should render correctly', () => {
        render(<Button className={'clean'}>Button test</Button>);
        expect(screen.getByText('Button test')).toHaveClass('clean');
    })
})