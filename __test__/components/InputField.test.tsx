// import React from 'react';
import InputField from '@/components/InputField';
import { render } from '@testing-library/react';


describe('/components/Button', () => {
   it('should render a light-gray input when classStyle is equal to register', () => {
      const { getByLabelText } = render(
         <InputField classStyle='register' label='Nome*' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' data-testid='register' />
      );
      const input = getByLabelText('Nome*');

      expect(input).toHaveClass('register');
      expect(input).not.toHaveClass('contact');
   });
   
   it('should render a white input when classStyle is equal to contact', () => {
      const { getByLabelText } = render(
         <InputField classStyle='contact' label='Email*' type='email' id='email' name='email' placeholder='Digite seu email' data-testid='contact' />
      );
      const input = getByLabelText('Email*');

      expect(input).toHaveClass('contact');
      expect(input).not.toHaveClass('register');
   });
});