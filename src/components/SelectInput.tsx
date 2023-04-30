import Select, { SingleValue } from 'react-select';
import styles from '@/styles/SelectInput.module.css';
import { useState } from 'react';

export type SelectInputProps = {
   options: Array<SelectOptions>;
   label: string;
}

export type SelectOptions = {
   value: string,
   label: string
}

export default function SelectInput({ label, options }: SelectInputProps) {
   const [selectedOption, setSelectedOption] = useState<SingleValue<{} | null>>(null);

   return (
      <div>
         <label className={styles.label}>{label}</label>
         <Select
            className={styles.select}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
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
