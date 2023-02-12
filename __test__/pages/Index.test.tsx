import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '@/pages';

describe('/pages/Index', () => {
   it("Should render the company logo", () => {
      const { getByRole, getByAltText } = render(<Index />);
      
      const logoElement = getByRole('heading');
      expect(logoElement).toBeInTheDocument();

      const altText = getByAltText('Logomarca da Adopet', {exact: false});
      expect(altText).toBeInTheDocument();
   });

   it("Should render a button with a text: 'Já tenho conta'", () => {
      const { getByText } = render(<Index />);
      const textElement = getByText(/Já tenho conta/i);
      expect(textElement).toBeInTheDocument();
   });

   it("Should render a button with a text: 'Quero me cadastrar'", () => {
      const { getByText } = render(<Index />);
      const textElement = getByText(/Quero me cadastrar/i);
      expect(textElement).toBeInTheDocument();
   });
});