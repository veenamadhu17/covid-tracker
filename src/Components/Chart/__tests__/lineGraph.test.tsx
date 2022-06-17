import { render, screen, cleanup } from '@testing-library/react';
import LineGraph from "../lineGraph";

test('render lineGraph', () => {
    render(<LineGraph
                infected={[20, 30, 50]}
                deaths={[4, 6, 8]}
                dates={[new Date("2022-01-16"), new Date("2022-01-17"), new Date("2022-01-18")]}
            />);
    const element = screen.getByTestId('line_test');
    expect(element).toBeInTheDocument();
});