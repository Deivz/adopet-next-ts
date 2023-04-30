import styles from '@/styles/FormInput.module.css';

type InputFieldProps = {
   id: string;
   label: string;
   name: string;
   placeholder: string;
   type: string;
}

export default function FormInput({ label, type, name, id, placeholder }: InputFieldProps) {
    return (
        <div>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
                type={type} name={name}
                id={id}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
}