import { render, screen } from "@testing-library/react";
import { Application } from "../Application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();
        //String Text match 
        const paragraphElement2 = screen.getByText('are mandatory', {exact: false});
        expect(paragraphElement2).toBeInTheDocument();
        //Regex Text match 
        const paragraphElement3 = screen.getByText(/are mandatory/i);
        expect(paragraphElement3).toBeInTheDocument();
        //Custom function Text match 
        const paragraphElement4 = screen.getByText((content) => content.endsWith('are mandatory'));
        expect(paragraphElement4).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('a person with a laptop');
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        });
        expect(nameElement2).toBeInTheDocument();
        
        const nameElement3 = screen.getByPlaceholderText('Fullname');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('Komil');
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement2).toBeInTheDocument();

        const submitBtnElement = screen.getByRole("button");
        expect(submitBtnElement).toBeInTheDocument();
        expect(submitBtnElement).toBeDisabled();
    });
});
