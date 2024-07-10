import { render, screen } from "../../../Test-Utils";
import { MuiMode } from "../MuiMode";
import { AppProviders } from "../../../providers/App-Providers";

describe('MuiMode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />); 
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    })
})