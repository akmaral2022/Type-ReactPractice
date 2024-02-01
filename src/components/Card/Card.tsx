import styles from './Card.module.css';
import deleteImg from '../../image/delete.svg'

interface CardProps {
    name: string;
    text: string
    completed?: boolean
    onChangeStatus: () => void
    onDelete: () => void
}

const Card: React.FC<CardProps> = ({ name, text, completed, onChangeStatus, onDelete }) => {
    const handleCheckboxChange = () => {
        onChangeStatus()
    }

    return (
        <div className={styles.Card}>
            <div className={styles.todoBox}>
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.cardElemts}>
                <input type="checkbox" className={styles.checkbox} checked={completed} onChange={handleCheckboxChange} />
                <button onClick={onDelete}>Delete<img src={deleteImg} alt='https://icons8.ru/icon/67884/мусор' /></button>
            </div>
        </div>
    )
}

export default Card;