import Link from 'next/link'
import styles from './styles.module.scss'
import routes from '@routes'
import Image from 'next/Image'


export default function Footer() {
    return <>
        <footer className={`bg-secondary w-100 d-flex ${styles.myLinks} `}>
            <div>
                <Link href={routes.home}>
                <Image scr="/img/logo.png" alt="logo" width={120} height={45} />
                </Link>
            </div>
            <div></div>
            <div></div>
            <div></div>
            
        </footer>
    </>
}