import { render, screen, cleanup } from '@testing-library/react';
import BarChart from "../barGraph";

test('render barGraph', () => {
    render(<BarChart
                infected={20}
                recovered={10}
                deaths={1}
                country={"Netherlands"}
            />);
    const element = screen.getByTestId('bar_test');
    expect(element).toBeInTheDocument();
});