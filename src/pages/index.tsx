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
      <section className={styles.home}>
        <div className={styles.content}>
          <img src='/images/Logo.svg' alt="Logomarca da Adopet" className={styles.logo} />
          <h2 className={styles.content__title}>Boas-vindas!</h2>
          <p className={styles.content__mobile}>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
          <p className={styles.content__desktop}>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
          <Button route='signin' text='Já tenho conta' className='linkButton' type='button' />
          <Button route='cadastro' text='Quero me cadastrar' className='linkButton' type='button' />
        </div>
        <img src='/images/ilustracao1.png' alt="Desenho de um cão e um gato" className={styles.illustration} />
      </section>
    </>
  )
}
