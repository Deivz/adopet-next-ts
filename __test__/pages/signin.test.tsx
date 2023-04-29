import SignIn from "@/pages/signin";
import { render } from "@testing-library/react";

describe('/pages/signin', () => {

   let getByAltText: any,
       getByLabelText: any,
       getByPlaceholderText: any,
       getByRole: any;

   beforeEach(() => {
      const component = render(<SignIn />);
      getByAltText = component.getByAltText;
      getByLabelText = component.getByLabelText;
      getByPlaceholderText = component.getByPlaceholderText;
      getByRole = component.getByRole;
   });

   it('should render the company logo', () => {
      const logo = getByAltText('Logomarca da Adopet');
      expect(logo.getAttribute('src')).toBe('/images/logo_azul.svg');
   });
   
   it('should render an email input component', () => {
      const inputEmail = getByLabelText('Email');
      expect(inputEmail).toBeInTheDocument();
   });
   
   it('should render a password input component', () => {
      const passwordInput = getByPlaceholderText('Insira sua senha');
      expect(passwordInput).toBeInTheDocument();
   });
   
   it('should render a button component called Entrar', () => {
      const button = getByRole('button');
      expect(button.getAttribute('value')).toBe('Entrar');
   });
   
   it('should render a light-gray input when classStyle is equal to register', () => {
      const input = getByLabelText('Email');
      expect(input).toHaveClass('register');
      expect(input).not.toHaveClass('contact');
   });
});


// describe('/pages/signin', () => {
//    const { getByAltText, getByLabelText, getByPlaceholderText, getByRole } = render(<SignIn />);

//    it('should render the company logo and an email, input and button components', () => {
      
//       const logo = getByAltText('Logomarca da Adopet');
//       const inputEmail = getByLabelText('Email');
//       const passwordInput = getByPlaceholderText('Insira sua senha');
//       const button = getByRole('button');
//       const input = getByLabelText('Email');

//       expect(logo.getAttribute('src')).toBe('/images/logo_azul.svg');
//       expect(inputEmail).toBeInTheDocument();
//       expect(passwordInput).toBeInTheDocument();
//       expect(button.getAttribute('value')).toBe('Entrar');
//       expect(input).toHaveClass('register');
//       expect(input).not.toHaveClass('contact');
//    });
// });


// describe('/pages/signin', () => {
//    it('should render the company logo', () => {
//       const { getByAltText } = render(<SignIn />);
//       const logo = getByAltText('Logomarca da Adopet');

//       expect(logo.getAttribute('src')).toBe('/images/logo_azul.svg');
//    });

//    it('should render an email input component', () => {
//       const { getByLabelText } = render(<SignIn />);

//       const inputEmail = getByLabelText('Email');

//       expect(inputEmail).toBeInTheDocument();
//    });

//    it('should render a password input component', () => {
//       const { getByPlaceholderText } = render(<SignIn />);

//       const passwordInput = getByPlaceholderText('Insira sua senha');

//       expect(passwordInput).toBeInTheDocument();
//    });

//    it("should render a button component called 'Entrar'", () => {
//       const { getByRole } = render(<SignIn />);

//       const button = getByRole('button');

//       expect(button.getAttribute('value')).toBe('Entrar');
//    });

//    it('should render a white input when classStyle is equal to register', () => {
//       const { getByLabelText } = render(<SignIn />);

//       const input = getByLabelText('Email');

//       expect(input).toHaveClass('register');
//       expect(input).not.toHaveClass('contact');
//    });
   
// });