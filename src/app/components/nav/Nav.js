"use client";

import styles from './nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faHeart, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/', icon: faHouse },
    { name: 'Favoritos', href: '/pages/Favoritos', icon: faHeart },
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <div className={styles.settings}>
                <div className={styles.inputField}>
                    <input type="text" placeholder="Digite o Nome da Planta" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} width="20px" />
                    </button>
                </div>
            </div>

            <div className={styles.navigation}>
                <ul>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href; // Verifica se a rota atual é igual ao link
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={isActive ? styles.active : styles.inactive}
                                >
                                    <div className={styles.iconField}>
                                        <FontAwesomeIcon icon={link.icon} width="20px" />
                                    </div>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className={styles.perfilField}>
                    <span>User</span>
                    <div className={styles.userImage}>
                        <FontAwesomeIcon icon={faUser} width="20px" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
