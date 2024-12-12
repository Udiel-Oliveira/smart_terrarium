import Nav from '@/app/components/nav/Nav'
import styles from './favorite.module.css'

export default function FavoritePage(){
    return(
        <div className={styles.page}>
            <Nav/>
            <main className={styles.main}>
                <img src="/assets/build.svg" alt="" />
                <h1>Pagina em Construção</h1>             
            </main>
        </div>
    )
}