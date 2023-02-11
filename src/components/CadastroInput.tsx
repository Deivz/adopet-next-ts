import '../styles/CadastroInput.module.css';

export type CadastroInputProps = {
   register?: any;
   label: string;
   type?: string;
   name: string;
   id: string;
   placeholder: string;
}

export default function CadastroInput({ register, label, type, name, id, placeholder }: CadastroInputProps) {
   return (
      <>
         <label htmlFor={id} className='label'>{label}</label>
         <input
            // {...register(`${id}`)}
            type={type} name={name}
            id={id}
            placeholder={placeholder}
            className='input'
         />
      </>
   );
}