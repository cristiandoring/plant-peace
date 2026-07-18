import styles from './ButtonGreen.module.css';

export default function ButtonGreen(props){
    return(
        <a href="" className={styles.button}>
            <span className={styles.text}>{props.text}</span>
        </a>
    )
}