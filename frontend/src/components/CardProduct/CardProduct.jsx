import styles from './CardProduct.module.css'

export default function CardProduct(props){
    return(
        <a href="" className={styles.cardProduct}>
            <div className={styles.img}>
                <img src={props.urlImg} alt="" />
            </div>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.price}>R$ {props.price}</p>
        </a>
    )
}