import styles from '@/styles/FormInput.module.css';
import ErrorField from './ErrorField';


type InputFieldProps = {
	errors: any;
	id: string;
	label: string;
	placeholder: string;
	type: string;
	register: any;
	status: boolean;
}

export default function FormInput({ errors, label, type, id, placeholder, register, status }: InputFieldProps) {
	return (
		<div className={styles.formInput}>
			<label htmlFor={id} className={styles.label}>{label}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={styles.input}
				{...register(`${id}`)}
				disabled={status}
			/>
			{errors?.[id]?.message && <ErrorField message={errors?.[id]?.message} />}
		</div>
	);
}