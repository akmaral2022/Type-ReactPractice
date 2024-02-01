import styles from './Card.module.css';
// import deleteImg from '../../image/delete.svg'

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
                <div className={styles.cardButtons}>
                    <button>Change<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/ball-point-pen.png" alt="ball-point-pen" /></button>
                    <button onClick={onDelete}>Delete<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-trash.png" alt="filled-trash" /></button>
                </div>
            </div>
        </div>
    )
}

export default Card;