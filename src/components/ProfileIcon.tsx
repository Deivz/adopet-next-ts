import styles from '@/styles/ProfileIcon.module.css';

interface ProfileIconProps {
   imageDefault: string;
}

export default function ProfileIcon({ imageDefault }: ProfileIconProps) {
    return (
        <>
        {imageDefault ?
            <div className={styles.icon__photo} style={{ background: `url("${imageDefault}") no-repeat center/cover` }}>
            </div>
            :
            <div className={styles.icon__default}>
            </div>
        }
        </>
    );
}