import styles from './styles.module.scss'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

import {FiLogOut} from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'

export function Header(){
    const { signOut} = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 430);
        };

        handleResize(); // Configurar o estado inicial com base na largura da tela atual.

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return( 
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    {isMobile ? (
                        <img src='/ico-png.png' alt="Logo" />
                    ) : (
                        <img src='/logo-png.png' alt="Logo" />
                    )}
                </Link>
                <nav className={styles.menuNav}>
                    <Link href="/category" legacyBehavior>
                        <a>Categoria</a>
                    </Link>
                    <Link href="/product" legacyBehavior>
                        <a>Cardapio</a>
                    </Link>
                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )   
}