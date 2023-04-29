import Card from '@/components/Card';
import styles from '@/styles/Home.module.css';
import { SetStateAction, useEffect, useState } from 'react';

type HomeProps = {
    petsJson: SetStateAction<never[]> ;
}

type Pet = {
    id: string;
    nome: string;
    idade: string;
    porte: string;
    perfil: string;
    cidade: string;
    estado: string;
    foto: any;
}

export async function getStaticProps(){
    const data = await fetch('http://127.0.0.1:8000/api/pets');
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos');

    const petsJson = await data.json();
    
    return {
        props: {
            petsJson
        },
      };
}

export default function Home({ petsJson }: HomeProps) {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        setPets(petsJson);
    }, []);

    return (
        <section className={styles.home}>
            <h2 className={styles.title__mobile}>Olá! Veja os amigos disponíveis para adoção!</h2>
            <div className={styles.text}>
                <h2 className={styles.title}>Olá!</h2>
                <h2 className={styles.title}>Veja os amigos disponíveis para adoção!</h2>
            </div>
            <div className={styles.cards}>
                {Object.values(pets).map((pet: Pet) => {
                    return <Card
                        key={pet.id}
                        image={pet.foto}
                        name={pet.nome}
                        age={pet.idade}
                        size={pet.porte}
                        temperament={pet.perfil}
                        local={`${pet.cidade} (${pet.estado})`}
                    />
                })}
            </div>
        </section>
    );
}