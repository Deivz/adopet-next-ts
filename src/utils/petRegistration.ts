import { ObjectInputData } from "./inputFieldData";

const formInputPets: ObjectInputData = {
   'nome': {
      'id': 1,
      'label': 'Nome',
      'type': 'text',
      'inputId': 'nome',
      'name': 'nome',
      'placeholder': 'Nome do pet'
   },
   'idade': {
      'id': 2,
      'label': 'Idade',
      'type': 'text',
      'inputId': 'idade',
      'name': 'idade',
      'placeholder': 'Idade do pet'
   },
   'porte': {
      'id': 3,
      'label': 'Porte',
      'type': 'text',
      'inputId': 'porte',
      'name': 'porte',
      'placeholder': 'Porte do pet'
   },
   'perfil': {
      'id': 4,
      'label': 'Perfil',
      'type': 'text',
      'inputId': 'perfil',
      'name': 'perfil',
      'placeholder': 'Perfil do pet'
   },
   'cidade': {
      'id': 5,
      'label': 'Cidade',
      'type': 'text',
      'inputId': 'cidade',
      'name': 'cidade',
      'placeholder': 'Cidade onde o pet reside'
   }
}

export default formInputPets;