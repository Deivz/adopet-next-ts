import styles from '@/styles/InputPassword.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import ErrorField from './ErrorField';

type InputPasswordProps = {
   errors?: any;
   id: string;
   label: string;
   name: string;
   placeholder: string;
   register?: any;
}

export default function InputPassword({ register, label, name, id, placeholder, errors }: InputPasswordProps) {
   const [mostrar, setMostrar] = useState(false);

   function mostrarOuEsconderSenha() {
      setMostrar(mostrar ? false : true);
   }

   return (
      <>
         <label htmlFor={id} className={styles.label}>{label}</label>
         <div className={styles.container__password}>
            {register ?
               <input
                  data-testid='password'
                  {...register(`${name}`)}
                  type={mostrar ? 'text' : 'password'}
                  name={name}
                  id={id}
                  placeholder={placeholder}
                  className={styles.password}
               />
               :
               <input
                  data-testid='password'
                  type={mostrar ? 'text' : 'password'}
                  name={name}
                  id={id}
                  placeholder={placeholder}
                  className={styles.password}
               />
            }

            <i onClick={mostrarOuEsconderSenha} data-testid='eyeIcon' className={styles.icon}>
               {mostrar ? <FaEye data-testid='faEye' /> : <FaEyeSlash data-testid='faEyeSlash' />}
            </i>
         </div>
         {errors?.[id]?.message && <ErrorField message={errors?.[id]?.message} />}
      </>
   );
}