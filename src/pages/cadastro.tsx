import Button from '@/components/Button';
import InputField from '@/components/InputField';
import InputPassword from '@/components/InputPassword';
import styles from '@/styles/Cadastro.module.css';
import Link from 'next/link';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { regExName, regExPassword } from '../../utils/regexValidation.js';
// import CampoErro from '../../components/CampoErro';
// import { api } from '../../../services/api';
// import { useNavigate } from "react-router-dom";

export default function Cadastro() {

   // const validacao = yup.object().shape({
   //    email: yup.string().required().email().max(50),
   //    nome: yup.string().required().min(2).max(50).matches(regExName),
   //    senha: yup.string().required().max(15).matches(regExPassword),
   //    senha__confirma: yup.string().required().oneOf([yup.ref('senha'), null])
   // });

   // const { register, handleSubmit, formState: { errors } } = useForm({
   //    resolver: yupResolver(validacao)
   // }, []);

   // const navigate = useNavigate();

   // function onSubmit(data) {
   //    api.post('/users', {
   //       email: data.email,
   //       nome: data.nome,
   //       senha: data.senha
   //    })
   //       .then(() => {
   //          alert("Usuário cadastrado com sucesso!");
   //          navigate('/login');
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //       });
   // }

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
            <form className={styles.form}>
               <div className={styles.form__field}>
                  <InputField label='Email*' type='email' id='email' name='email' placeholder='Escolha seu melhor email' />
                  {/* <InputField register={register} label='Email*' type='email' id='email' name='email' placeholder='Escolha seu melhor email' /> */}
                  {/* {errors?.email?.message && <CampoErro type={errors.email.type} field="email" />} */}
               </div>
               <div className={styles.form__field}>
                  <InputField label='Nome*' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' />
                  {/* <InputField register={register} label='Nome*' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' /> */}
                  {/* {errors?.nome?.message && <CampoErro type={errors.nome.type} field="nome" />} */}
               </div>
               <div className={styles.form__field}>
                  <InputPassword label='Senha*' id='senha' name='senha' placeholder='Crie uma senha' />
                  {/* <SenhaInput register={register} label='Senha*' id='senha' name='senha' placeholder='Crie uma senha' /> */}
                  {/* {errors?.senha?.message && <CampoErro type={errors.senha.type} field="senha" />} */}
               </div>
               <div className={styles.form__field}>
                  <InputPassword label='Confirma sua senha*' id='senha__confirma' name='senha__confirma' placeholder='Repita a senha criada acima' />
                  {/* <InputPassword register={register} label='Confirma sua senha*' id='senha__confirma' name='senha__confirma' placeholder='Repita a senha criada acima' /> */}
                  {/* {errors?.senha__confirma?.message && <CampoErro type={errors.senha__confirma.type} field="senha__confirma" />} */}
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