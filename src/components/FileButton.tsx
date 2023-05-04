import styles from '@/styles/FileButton.module.css';
import ErrorField from './ErrorField';
import { useState } from 'react';

export type FileButtonProps = {
   errors: any;
   id: string;
   label: string;
   register: any;
}

export default function FileButton({ errors, id, label, register }: FileButtonProps) {

   const [file, setFile] = useState();

   const handleChange = (e: any) => {
      const file = e.target.files[0];
      setFile(file.name);
   }

   return (
      <div className={styles.fileButton}>
         <label className={styles.label}>{label}</label>
         <div className={styles.container}>
            <input className={styles.button} type='button' onClick={() => document.getElementById(`${id}`)?.click()} value='Escolher foto'  />
            {/* <label className={styles.imageName} id='fileName'>{file}</label> */}
         </div>
         <input type="file" onChange={handleChange} accept="image/*" id={id} hidden {...register(`${id}`)} />
         {errors?.[id]?.message && <ErrorField message={errors?.[id]?.message} />}
      </div>
   )
}
