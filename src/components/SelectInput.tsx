import Select, { SingleValue } from 'react-select';
import styles from '@/styles/SelectInput.module.css';
import { useState } from 'react';
import ErrorField from './ErrorField';

export type SelectInputProps = {
   errors: any;
   id: string;
   options: Array<SelectOptions>;
   label: string;
   placeholder: string;
   type?: string | null;
   register: any;
   status: boolean;
}

export type SelectOptions = {
   value: string,
   label: string
}

export default function SelectInput({ errors, id, label, options, placeholder, type = null, register, status }: SelectInputProps) {

   const [selectedOption, setSelectedOption] = useState<SingleValue<{} | null>>(null);

   return (
      <div className={styles.selectInput}>
         <label className={styles.label}>{label}</label>
         <Select
            className={type ? styles[type] : styles.select}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={placeholder}
            name={id}
            styles={{
               control: (baseStyles, state) => ({
                  ...baseStyles,
                  minHeight: 48
               }),
            }}
         />
      </div>
   );
}
