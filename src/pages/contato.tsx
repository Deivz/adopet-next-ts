import Button from '@/components/Button';
import InputField from '@/components/InputField';
import styles from '@/styles/Contato.module.css';
import inputFieldData, { InputFieldData } from '@/utils/inputFieldData';

// import { regExTelefone } from '../../utils/regexValidation.js';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import CampoErro from '../../components/CampoErro';

export default function Contato() {

   // const validacao = yup.object().shape({
   //    nome: yup.string().required().min(2).max(50),
   //    telefone: yup.string().required().matches(regExTelefone),
   //    nome__animal: yup.string().required().min(2).max(20),
   //    contato__texto: yup.string().required().max(300),
   // });

   // const { register, handleSubmit, formState: { errors } } = useForm({
   //    resolver: yupResolver(validacao)
   // }, []);

   // function enviar(data) {
   //    alert("Mensagem enviada com sucesso!");
   //    window.location.reload();
   // }

   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section className={styles.contact}>
            <p className={styles.title}>Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:</p>
            <form className={styles.form}>
               {
                  Object.values(inputFieldData).map((label: InputFieldData) => {
                     return (
                     <InputField
                        // register={register}
                        classStyle='contact'
                        key={label.id}
                        label= {label.label}
                        type= {label.type}
                        id= {label.inputId}
                        name= {label.name}
                        placeholder= {label.placeholder}
                     />
                     )
                  })
               }
               {/* {errors?.nome__animal?.message && <CampoErro type={errors.nome__animal.type} field="nome__animal" />} */}
               <div className={styles.form__fields}>
                  <label htmlFor='contato__texto' className={styles.label}>Mensagem</label>
                  <textarea
                     // {...register('contato__texto')}
                     id='contato__texto'
                     className={styles.text}
                     name='contato__texto'
                     placeholder='Escreva sua mensagem'
                     maxLength={300}
                  />
                  {/* {errors?.contato__texto?.message && <CampoErro type={errors.contato__texto.type} field="contato__texto" />} */}
               </div>
               <div className={styles.button}>
                  <Button type='submit' className='button' value='Enviar' />
               </div>
            </form>
         </section>
      </>
   );
}