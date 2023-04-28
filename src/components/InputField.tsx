import styles from '@/styles/InputField.module.css';

type InputFieldProps = {
   id: string;
   classStyle: string;
   label: string;
   name: string;
   placeholder: string;
   register?: string;
   type: string;
}

export default function InputField({ register, classStyle, label, type, name, id, placeholder }: InputFieldProps) {
    return (
        <>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
               //  {...register(`${id}`)}
                type={type} name={name}
                id={id}
                placeholder={placeholder}
                className={styles[classStyle]}
            />
        </>
    );
}