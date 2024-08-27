import Link from 'next/link'
import styles from './styles.module.scss'
import routes from '@/routes'
import Image from 'next/image'
import logo from '@/components/img/logo-white.png'
import facebook from '@/components/img/facebook.svg'
import instagram from '@/components/img/instagram.svg'
import twitter from '@/components/img/twitter.svg'


export default function Footer() {
    return <>
        <footer className={`bg-secondary p-2vh p-7vw w-100 d-flex flex-wrap ${styles.footer} `}>
            <div className='col-6 col-md-auto order-1 order-md-0'>
                <Link href={routes.home}>
                <Image src={logo} alt="logo" width={120} height={75} />
                </Link>
            </div>
            <div className='col-6 col-md-auto'> 
                <ul className={`d-flex-column list-unstyled`}>
                    <li> <Link href={routes.home}>Abouts Us</Link></li>
                    <li> <Link href={routes.home}>Responsibilties</Link></li>
                    <li> <Link href={routes.home}>Our Services</Link></li>
                    <li> <Link href={routes.home}>Contact</Link></li>
                </ul>
         </div>
            
         <div className='col-6 col-md-auto d-flex justify-content-end'> 
                <ul className={`d-flex flex-column list-unstyled`}>
                    <li> <Link href={routes.home}>Disclaimer</Link></li>
                    <li> <Link href={routes.home}>Testimonials</Link></li>
                    <li> <Link href={routes.home}>Private Policy</Link></li>
                    <li> <Link href={routes.home}>Terms of Service</Link></li>
                </ul>
         </div>
            <div className={`col-6 col-md-auto d-flex justify-content-end order-1 order-md-0 
                align-self-end `}>
                <ul className='d-flex gap-2 list-unstyled'>
                    <li> <Link href={routes.home}><Image src={facebook} 
                    alt="facebook" width={20} height={20} /></Link></li> 
                    <li> <Link href={routes.home}><Image src={instagram} 
                    alt="instagram" width={20} height={20} /></Link></li> 
                    <li> <Link href={routes.home}><Image src={twitter} 
                    alt="twitter" width={20} height={20} /></Link></li>
                </ul>
            </div>
            
            
        </footer>
    </>
}