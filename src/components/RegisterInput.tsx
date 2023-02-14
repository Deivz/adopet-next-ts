import '../styles/RegisterInput.module.css';

export type RegisterInputProps = {
   register?: any;
   label: string;
   type?: string;
   name: string;
   id: string;
   placeholder: string;
}

export default function RegisterInput({ register, label, type, name, id, placeholder }: RegisterInputProps) {
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