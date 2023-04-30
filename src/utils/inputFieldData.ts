export interface InputFieldData {
   id: number;
   label: string;
   type: string;
   inputId: string;
   name: string;
   placeholder: string;
}

export interface ObjectInputData {
   [key: string]: InputFieldData;
}

const inputFieldData: ObjectInputData = {
   'nome': {
      'id': 1,
      'label': 'Nome',
      'type': 'text',
      'inputId': 'nome',
      'name': 'nome',
      'placeholder': 'Insira seu nome completo'
   },
   'telefone': {
      'id': 2,
      'label': 'Telefone',
      'type': 'tel',
      'inputId': 'telefone',
      'name': 'telefone',
      'placeholder': 'Insira seu telefone e/ou whatsapp'
   },
   'nomeAnimal': {
      'id': 3,
      'label': 'Nome do animal',
      'type': 'text',
      'inputId': 'nome__animal',
      'name': 'nome__animal',
      'placeholder': 'Por qual animal você se interessou?'
   }
}

export default inputFieldData;