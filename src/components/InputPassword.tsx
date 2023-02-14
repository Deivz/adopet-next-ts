import styles from '@/styles/InputPassword.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

type InputPasswordProps = {
   id: string;
   label: string;
   name: string;
   placeholder: string;
   register?: string;
}

export default function InputPassword({ register, label, name, id, placeholder }: InputPasswordProps) {
    const [mostrar, setMostrar] = useState(false);

    function mostrarOuEsconderSenha() {
        setMostrar(mostrar ? false : true);
    }

    return (
        <>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <div className={styles.container__password}>
                <input
                  //   {...register(`${name}`)}
                    type={mostrar ? 'text' : 'password'}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    className={styles.password}
                />
                <i onClick={mostrarOuEsconderSenha} className={styles.icon}>{mostrar ? <FaEye /> : <FaEyeSlash />}</i>
            </div>
        </>
    );
}