import Card from '@/components/Card';
import styles from '@/styles/Home.module.css';
import { SetStateAction } from 'react';

type HomeProps = {
	petsJson: SetStateAction<never[]>;
	message: string
}

type Pet = {
	id: string;
	nome: string;
	idade: string;
	porte: string;
	perfil: string;
	cidade: string;
	estado: string;
	foto: string;
}

export async function getStaticProps() {
	try {
		const data = await fetch('http://127.0.0.1:8000/api/pets');
		const petsJson = await data.json();

		return {
			props: {
				petsJson
			},
		};
	} catch (error) {
		return {
			props: {
				message: "Nenhum pet a ser exibido!"
			},
		};
	}
}

export default function Home({ petsJson, message }: HomeProps) {
	return (
		<section className={styles.home}>
			{
				petsJson &&
				<>
					<h2 className={styles.title__mobile}>Olá! Veja os amigos disponíveis para adoção!</h2>
					<div className={styles.text}>
						<h2 className={styles.title}>Olá!</h2>
						<h2 className={styles.title}>Veja os amigos disponíveis para adoção!</h2>
					</div>
					<div className={styles.cards}>
						{Object.values(petsJson).map((pet: Pet) => {
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
				</>
			}
			{
				message &&
				<>
					<h2 className={styles.title__mobile}>{message}</h2>
					<div className={styles.text}>
						<h2 className={styles.title}>{message}</h2>
					</div>
				</>
			}
		</section>
	);
}