import InputPassword from '@/components/InputPassword';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('/components/InputPassword', () => {
   it('should render an input type password', () => {
      const { getByPlaceholderText } = render(<InputPassword label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />);
      const botaoSenha = getByPlaceholderText('Insira sua senha');

      expect(botaoSenha).toBeInTheDocument();
   });

   it('should have the eye icon', () => {
      const { container } = render(<InputPassword label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />);
      const icon = container.getElementsByClassName('icon');

      expect(icon.length).toBe(1);
   });

   it('toggles password visibility on click', async () => {
      const { getByTestId, queryByTestId } = render(<InputPassword label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />);
      const icon = getByTestId('eyeIcon');
      const input = getByTestId('password');


      // primeira renderização
      const eyeSlash = queryByTestId('faEyeSlash');
      expect(eyeSlash).toBeInTheDocument();
      expect(input.getAttribute('type')).toBe('password');

      // primeiro clique
      fireEvent.click(icon);
      expect(input.getAttribute('type')).toBe('text');
      await waitFor(() => {
         const eye = queryByTestId('faEye');
         expect(eye).toBeInTheDocument();
         expect(eyeSlash).not.toBeInTheDocument();
      });

      // segundo clique
      fireEvent.click(icon);
      expect(input.getAttribute('type')).toBe('password');
      await waitFor(() => {
         const eyeSlash = queryByTestId('faEyeSlash');
         const eye = queryByTestId('faEye');
         expect(eye).not.toBeInTheDocument();
         expect(eyeSlash).toBeInTheDocument();
      });
   });
});