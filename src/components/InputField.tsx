import styles from '@/styles/InputField.module.css';
import ErrorField from './ErrorField';

type InputFieldProps = {
	errors?: any;
	id: string;
	classStyle: string;
	label: string;
	name: string;
	placeholder: string;
	register?: any;
	type: string;
}

export default function InputField({ register, classStyle, label, type, name, id, placeholder, errors }: InputFieldProps) {
	return (
		<>
			<label htmlFor={id} className={styles.label}>{label}</label>
			{register ?
				<input
					{...register(`${id}`)}
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					className={styles[classStyle]}
				/>
				:
				<input
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					className={styles[classStyle]}
				/>
			}
			{errors?.[id]?.message && <ErrorField message={errors?.[id]?.message} />}
		</>
	);
}