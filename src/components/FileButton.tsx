import styles from '@/styles/FileButton.module.css';
import { ChangeEvent, useState } from 'react';

export type FileButtonProps = {
   label: string;
}

export default function FileButton({ label }: FileButtonProps) {
   const [file, setFile] = useState<File>();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         setFile(e.target.files[0])
      }
   }

   return (
      <div className={styles.fileButton}>
         <label className={styles.label}>{label}</label>
         <div className={styles.container}>
            <input className={styles.button} type='button' onClick={() => document.getElementById('hiddenInputFile')?.click()} value='Escolher foto' />
            <label className={styles.imageName}>{file?.name}</label>
         </div>
         <input type="file" onChange={handleChange} id='hiddenInputFile' hidden />
      </div>
   )
}
