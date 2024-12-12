import Link from "next/link"
import styles from "./filterButton.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FilterButton({type, title, icon, link}){
    return(
    <Link href={link}><button className={styles.filterBtn} type={type}>
        <div className={styles.iconFielde}>
            <FontAwesomeIcon icon={icon} className={styles.icone}/>
        </div>
        <h2 className={styles.title}>{title}</h2>
        </button>
    </Link> 
    )
}