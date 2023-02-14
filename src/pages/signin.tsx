import styles from '@/styles/SignIn.module.css';
import Button from '@/components/Button';
import Link from 'next/link';
import { useCallback } from 'react';
import InputField from '@/components/InputField';
import InputPassword from '@/components/InputPassword';
// import Patas from '../../components/Patas';
// import CadastroInput from '../../components/CadastroInput';
// import SenhaInput from '../../components/SenhaInput';
// import { useForm } from 'react-hook-form';
// import CampoErro from '../../components/CampoErro';

export default function SignIn() {

   // const { authenticated, logar, user, validUser, validPassword } = useContext(AuthContext);

   // const { register, handleSubmit } = useForm();

   const handleSubmit = useCallback(
      () => {
         console.log("logou");
      }, []);


   return (
      <>
         {/* <Patas /> */}
         <div className={styles.side__image}>
         </div>
         <section>
            <div className={styles.content}>
               <Link href='/'>
                  <img src='/images/logo_azul.svg' alt="Logomarca da Adopet" className={styles.logo} />
               </Link>
               <p className={styles.content__tittle}>Já tem conta? Faça seu login:</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
               <div className={styles.form__fields}>
                  <InputField label='Email' type='email' id='email' name='email' placeholder='Insira seu email' />
                  {/* {!validUser && <CampoErro type='invalid' field="email" />} */}
               </div>
               <div className={styles.form__fields}>
                  <InputPassword label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />
                  {/* {!validPassword && <CampoErro type='invalid' field="senha" />} */}
               </div>
               <Link href='/login' className={styles.password__link}>
                  Esqueci minha senha
               </Link>
               <div className={styles.button__signin}>
                  <Button type='submit' value='Entrar' className='button' />
               </div>
            </form>
         </section>
      </>
   );
}