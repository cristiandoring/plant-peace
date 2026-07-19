import styles from './ImgBackground.module.css'
import plant from '../../assets/img/plant.jpg'

export default function ImgBackground(){
    return(
        <div className={styles.content}>
            <img src={plant} alt="plant" className={styles.img} />
        </div>
    )
}