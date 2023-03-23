import styles from '@/styles/ErrorField.module.css';
import errors from "../utils/errors";

type ErrorFieldProps = {
   type: string;
   field: string;
}

export default function CampoErro({type, field}: ErrorFieldProps){
    return(
        <>
            <span className='erro'>{errors[field][type]}</span>
        </>
    );
}