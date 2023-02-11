import Head from 'next/head';
import styles from '@/styles/Index.module.css';
import Button from '@/components/Button';

export default function Index() {
  return (
    <>
      <Head>
        <title>Adopet</title>
        <meta name="description" content="Adopet, adote um pet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.side__image}>
      </div>
      <section>
        <div className={styles.content}>
          <img src='/images/Logo.svg' alt="Logomarca da Adopet" className={styles.logo} />
          <h2 className={styles.content__tittle}>Boas-vindas!</h2>
          <p className={styles.content__tittle__mobile}>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
          <p className={styles.content__tittle__desktop}>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
          <Button route='login' text='Já tenho conta' className='linkButton' type='button' />
          <Button route='cadastro' text='Quero me cadastrar' className='linkButton' type='button' />
        </div>
        <div className={styles.container__illustration}>
          <img src='/images/ilustracao1.png' alt="Desenho de um cão e um gato" className={styles.illustration} />
        </div>
      </section>
    </>
  )
}
