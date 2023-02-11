import styles from '@/styles/DefaultPage.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Fragment, useEffect } from "react";

type DefaultPageProps = {
   children: React.ReactNode;
}

export default function DefaultPage({ children }: DefaultPageProps) {

   const router = useRouter();

   const { pathname } = router;

   useEffect(() => {
      document.getElementById("__next")?.classList.add('page');

      if(pathname === '/'){
         document.getElementById("__next")?.classList.add('bgBlue');
         document.getElementById("__next")?.classList.remove('bgWhite');
      } else {
         document.getElementById("__next")?.classList.remove('bgBlue');
         document.getElementById("__next")?.classList.add('bgWhite');
      }
   }, [pathname])

   return (
      <Fragment>
         <header>
            <div className={`container ${styles.header}`}>
               <nav className={styles.navigation}>
                  <ul className={styles.navigation__list}>
                     <li className={styles.header__logo}>
                        <Link href="/">
                           <img src='/images/logo_branca.svg' alt="Logomarca da Adopet" />
                        </Link>
                     </li>
                     <li className='cabecalho__icones'>
                        <Link href={pathname === '/home' ? '/home' : '/'}>
                           <img src='/images/Casa.svg' alt="Página inicial" />
                        </Link>
                     </li>
                     <li className='cabecalho__icones'>
                        <Link href="contato">
                           <img src='images/Mensagens.svg' alt="Caixa de mensagens" />
                        </Link>
                     </li>
                  </ul>
               </nav>
               {/* {(pathname === '/home' || pathname === '/contato' || pathname === '/perfil') &&
                  <div className='perfil'>
                     <Link href='perfil'>
                        <IconePerfil imageDefault={imageDefault} />
                     </Link>
                     {authenticated && <BotaoSair />}
                  </div>
               } */}
            </div>
         </header>
         <main className={styles.feed}>
            {children}
         </main>
         <footer>
            <div className={`container ${styles.footer}`}>2022 - Desenvolvido por Carlos Davi.</div>
         </footer>
      </Fragment>
   )
}
