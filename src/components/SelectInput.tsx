import Select, { SingleValue } from 'react-select';
import styles from '@/styles/SelectInput.module.css';
import { useState } from 'react';

export type SelectInputProps = {
   options: Array<SelectOptions>;
   label: string;
   placeholder: string;
   type?: string | null;
}

export type SelectOptions = {
   value: string,
   label: string
}

export default function SelectInput({ label, options, placeholder, type = null }: SelectInputProps) {
   const [selectedOption, setSelectedOption] = useState<SingleValue<{} | null>>(null);

   return (
      <div>
         <label className={styles.label}>{label}</label>
         <Select
            className={type ? styles[type] : styles.select}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder = {placeholder}
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
