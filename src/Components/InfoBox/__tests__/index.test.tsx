import { render, screen, cleanup } from '@testing-library/react';
import InfoBox from '..';

test('render info box', () => {
    render(<InfoBox
                title='Cases'
                cases='10'
                lastUpdate='2022-06-17T10:20:42.000Z'
            />);
    const element = screen.getByTestId('infoBox_test');
    expect(element).toBeInTheDocument();
});