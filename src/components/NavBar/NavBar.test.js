import {render, screen} from "@testing-library/react";
import NavBar from "./NavBar";

test('The NavBar component should render', () => {

    const title = 'Test application';
    render(<NavBar title={title} />);

    expect(screen.getByRole('heading')).toHaveTextContent(title)
})