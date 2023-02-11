import Button from "@/components/Button";
import Link from "next/link";


export default function SignIn() {

   return (
      <>
         <div className='login__imagem--lateral'>
         </div>
         <section>
            <div className='login__conteudo'>
               <Link href={'/'}>
                  {/* <img src={ } alt="Logomarca da Adopet" className="logo" /> */}
               </Link>
               <p className="login__conteudo--titulo">Já tem conta? Faça seu login:</p>
            </div>
            <form className="login__formulario">
               <div className='formulario__campos'>
                  {/* <CadastroInput register={register} label='Email' type='email' id='email' name='email' placeholder='Insira seu email' />
                  {!validUser && <CampoErro type='invalid' field="email" />} */}
               </div>
               <div className='formulario__campos'>
                  {/* <SenhaInput register={register} label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />
                  {!validPassword && <CampoErro type='invalid' field="senha" />} */}
               </div>
               <Link href={'/login'} className='lembrar__senha'><p className='texto__lembrar'>Esqueci minha senha</p></Link>
               <div className="botao__entrar">
                  <Button type='submit' value='Entrar' />
               </div>
            </form>
         </section>
      </>
   );
}
