import Button from '@/components/Button';
import InputField from '@/components/InputField';
import InputPassword from '@/components/InputPassword';
import styles from '@/styles/Cadastro.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { regExName, regExPassword } from '../utils/regexValidation';
import { useRouter } from 'next/router';

export type FormInputs = {
   name: string;
   password: string;
   email: string;
}

export default function Cadastro() {

   const validacao = yup.object().shape({
      email: yup.string().required().email().max(50),
      name: yup.string().required().min(2).max(50).matches(regExName),
      password: yup.string().required().max(15).matches(regExPassword),
      password_confirmation: yup.string().required().oneOf([yup.ref('password')])
   });

   const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
      resolver: yupResolver(validacao)
   });

   const router = useRouter()

   function onSubmit(userData: FormInputs) {
      fetch('http://127.0.0.1:8000/api/users', {
         method: 'POST',
         body: JSON.stringify(userData),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
      })
         .then((res) => {
            if (!res.ok) {
               throw new Error('Não foi possível realizar seu cadastro.');
            }
            return res.json();
         })
         .then((data) => {
            if (data.success) {
               router.push('/home')
               // setModalStatusOk(true);
               // setKey(key);
               // reset();
            }
         })
         .catch((err) => {
            // setModalStatusError(true);
            alert('Deu erro');
         });
   }

   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section>
            <div className={styles.content}>
               <Link href='/'><img src='/images/logo_azul.svg' alt="Logomarca da Adopet" className={styles.logo} /></Link>
               <p className={styles.content__title}>Ainda não tem cadastro?</p>
               <p className={styles.content__text}>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.form__field}>
                  <InputField classStyle='register' label='Email*' type='email' id='email' name='email' placeholder='Escolha seu melhor email' register={register} errors={errors} />
               </div>
               <div className={styles.form__field}>
                  <InputField classStyle='register' label='Nome*' type='text' id='name' name='name' placeholder='Digite seu nome completo' register={register} errors={errors} />
               </div>
               <div className={styles.form__field}>
                  <InputPassword label='Senha*' id='password' name='password' placeholder='Crie uma senha' register={register} errors={errors} />
               </div>
               <div className={styles.form__field}>
                  <InputPassword label='Confirma sua senha*' id='password_confirmation' name='password_confirmation' placeholder='Repita a senha criada acima' register={register} errors={errors} />
               </div>
               <div className={styles.button__mobile}>
                  <Button className='button' type='submit' value='Cadastrar' />
               </div>
               <div className={styles.button__desktop}>
                  <Button className='button' type='submit' value='Cadastrar!' />
               </div>
            </form>
         </section>
      </>
   );
}