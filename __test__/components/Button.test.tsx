import React from 'react';
import { getByLabelText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '@/components/Button';

describe('/components/Button', () => {
   it('renders an input when className is not equal to linkButton', () => {
      const { getByRole } = render(<Button className='button' type='button' />);
      const input = getByRole('button');

      expect(input).toBeInTheDocument();
   });

   it('renders a Link when className is equal to linkButton', () => {
      const { getByRole } = render(<Button className='linkButton' route='login' text='Já tenho conta' type='button' />);
      const link = getByRole('link');

      expect(link).toBeInTheDocument();
   });

   it('should not render a Link when className is equal to button', () => {
      const { queryByRole } = render(<Button className='button' route='login' text='Já tenho conta' type='button' />);
      const link = queryByRole('link');

      expect(link).toBeNull();
   });
});