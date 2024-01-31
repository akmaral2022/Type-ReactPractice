import styles from './Card.module.css';
interface CardProps {
    name: string;
    text: string
    completed?: boolean
    onChangeStatus: () => void
}
const Card: React.FC<CardProps> = ({ name, text, completed, onChangeStatus }) => {

    const handeChangeStatus = () => {

        onChangeStatus()
    }
    return (
        <div className={styles.Card}>
            <div className={styles.todoBox}>
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
            <input type="checkbox" className={styles.checkbox} checked={completed} onChange={handeChangeStatus} />

        </div>
    )
}
export default Card