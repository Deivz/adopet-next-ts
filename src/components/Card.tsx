import styles from '@/styles/Card.module.css';

interface CardProps {
	local: string;
	age: string;
	image: string;
	name: string;
	temperament: string;
	size: string;
}

export default function Card({ image, name, age, size, temperament, local }: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.pet__image}>
				<img src={image} alt="Foto do pet" />
			</div>
			<div>
				<h3 className={styles.pet__name}>{name}</h3>
				<p className={styles.pet__age}>{age}</p>
				<p className={styles.pet__size}>{size}</p>
				<p className={styles.pet__temperament}>{temperament}</p>
				<p className={styles.pet__local}>{local}</p>
				<div className={styles.guardian__message}>
					<img src='/images/mensagem_responsavel.svg' alt="Ícone de mensagem" />
					<p className={styles.guardian}>Falar com responsável</p>
				</div>
			</div>
		</div>
	);
}