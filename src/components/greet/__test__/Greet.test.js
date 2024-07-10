import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

/** Test Driven Development, we create test first than develop
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet name={""}/>);
        const textElement = screen.getByText(/hello/i); //putting text inside /hello/ will ignore case sensativity "Hello" also checks case sensativity
        expect(textElement).toBeInTheDocument();
    })

    test('renders with a name', () => {
        render(<Greet name='Komil'/>);
        const textElement = screen.getByText('Hello Komil');
        expect(textElement).toBeInTheDocument();
    })      
})