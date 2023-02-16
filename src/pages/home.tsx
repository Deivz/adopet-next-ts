import Card from '@/components/Card';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
      //   api.get('/pets').then((response) => {
      //       setPets(response.data);
      //   })
    }, []);

    return (
        <section className={styles.home}>
            <h2 className={styles.title__mobile}>Olá! Veja os amigos disponíveis para adoção!</h2>
            <div className={styles.text}>
                <h2 className={styles.title}>Olá!</h2>
                <h2 className={styles.title}>Veja os amigos disponíveis para adoção!</h2>
            </div>
            <div className={styles.cards}>
                {Object.values(pets).map((pet) => {
                    return <Card
                        key='{pet.id}'
                        image='{pet.image}'
                        name='{pet.name}'
                        age='{pet.age}'
                        size='{pet.size}'
                        temperament='{pet.temperament}'
                        local='{pet.local}'
                    />
                })}
            </div>
        </section>
    );
}