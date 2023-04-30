import { SelectOptions } from "@/components/SelectInput";
import Pet from "@/pages/pet";
import { fireEvent, getAllByTestId, getByRole, getByTestId, getByText, queryByRole, queryByText, render, waitFor } from "@testing-library/react";

describe('/pages/pet', () => {

   let getByLabelText: any,
      queryAllByText: any,
      queryByText: any,
      getByTestId: any;

   beforeEach(() => {
      const countries: Array<SelectOptions> = [
         {
            value: 'BA',
            label: 'Bahia'
         },
         {
            value: 'SP',
            label: 'São Paulo'
         }
      ];
      const message: Array<SelectOptions> = [
         {
            value: '',
            label: 'Nenhum estado a ser exibido!'
         }
      ];
      const component = render(<Pet countries={countries} message={message} />);

      getByLabelText = component.getByLabelText;
      getByTestId = component.getByTestId;
      queryByText = component.queryByText;
      queryAllByText = component.queryAllByText;
   });

   it('should render form inputs: nome, idade, porte, perfil, cidade', () => {
      const nome = getByLabelText('Nome');
      const idade = getByLabelText('Idade');
      const porte = getByLabelText('Porte');
      const perfil = getByLabelText('Perfil');
      const cidade = getByLabelText('Cidade');

      expect(nome).toBeInTheDocument();
      expect(idade).toBeInTheDocument();
      expect(porte).toBeInTheDocument();
      expect(perfil).toBeInTheDocument();
      expect(cidade).toBeInTheDocument();
   });

   // it('should render message props instead of countries', async () => {
   //    const selectInput = document.getElementsByClassName('css-1aexgz2-control')[0];
      
   //    // clique no select
   //    fireEvent.click(selectInput);
   //    await waitFor(async () => {
   //       const optionSelected = queryByText('react-select-3-option');

   //       // clique no opção
   //       fireEvent.click(optionSelected);
   //       await waitFor(() => {
   //          const message = queryAllByText('Nenhum estado a ser exibido!');
   //          const country = queryAllByText('Bahia');

   //          expect(message).toBeInTheDocument();
   //          expect(country).toBeInTheDocument();
   //       });
   //    });
   //    // expect(country).toBeInTheDocument();
   // });
});