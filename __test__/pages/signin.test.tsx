import InputField from "@/components/InputField";
import SignIn from "@/pages/signin";
import { render } from "@testing-library/react";


describe('/pages/signin', () => {
   it('should render the company logo', () => {
      const { getByAltText } = render(<SignIn />);
      const logo = getByAltText('Logomarca da Adopet');

      expect(logo.getAttribute('src')).toBe('/images/logo_azul.svg');
   });

   it('should render an email input component', () => {
      const { getByLabelText } = render(<SignIn />);

      const inputEmail = getByLabelText('Email');

      expect(inputEmail).toBeInTheDocument();
   });

   it('should render a password input component', () => {
      const { getByPlaceholderText } = render(<SignIn />);

      const passwordInput = getByPlaceholderText('Insira sua senha');

      expect(passwordInput).toBeInTheDocument();
   });

   it("should render a button component called 'Entrar'", () => {
      const { getByRole } = render(<SignIn />);

      const button = getByRole('button');

      expect(button.getAttribute('value')).toBe('Entrar');
   });
});