import styles from '@/styles/ErrorField.module.css';
import errors from "../utils/errors";

// type ErrorFieldProps = {
//    type: string;
//    field: string;
// }

type ErrorFieldProps = {
   message: string;
}

export default function ErrorField({message}: ErrorFieldProps){
    return(
        <>
            <span className={styles.erro}>{message}</span>
        </>
    );
}

// export default function ErrorField({type, field}: ErrorFieldProps){
//     return(
//         <>
//             <span className={styles.erro}>{errors[field][type]}</span>
//         </>
//     );
// }