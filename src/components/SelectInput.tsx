import Select from 'react-select';
import styles from '@/styles/SelectInput.module.css';
import { useEffect, useState } from 'react';
import ErrorField from './ErrorField';

export type SelectInputProps = {
   errors?: any;
   id: string;
   options: Array<SelectOptions>;
   label: string;
   placeholder: string;
   type?: string | null;
   value?: any;
   onChange?: any;
}

export type SelectOptions = {
   value: string,
   label: string
}

export default function SelectInput({ errors, id, label, options, placeholder, type = null, value, onChange }: SelectInputProps) {

   return (
      <div className={styles.selectInput}>
         <label className={styles.label}>{label}</label>
         <Select
            className={type ? styles[type] : styles.select}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            id={id}
            styles={{
               control: (baseStyles, state) => ({
                  ...baseStyles,
                  minHeight: 48
               }),
            }}
            value={value}
         />
         {errors?.[id]?.message && <ErrorField message={errors?.[id]?.message} />}
      </div>
   );
}
