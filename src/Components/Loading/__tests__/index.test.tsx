import { render, screen, cleanup } from '@testing-library/react';
import Loading from '..';

test('render info box', () => {
    render(<Loading/>);
    const element = screen.getByTestId('loading_test');
    expect(element).toBeInTheDocument();
});