import { cn } from '@/libs/utils';
import Brain from './Brain';
import styles from './Footer.module.css';
import Link from 'next/link';
import { Mailto } from './mailto/Mailto';

export default function Footer(){
    return <footer className={styles.Footer} id="footer" tabIndex={-1}>
        <div className={cn("container", styles.Container)}>
            <div className={styles.BrainWrapper}>
                <Brain className={styles.Brain}/>
            </div>
            <div className={styles.ContactDataWrapper}>
                <h2 className={styles.AddressTitle}>Philippe Anciaux</h2>
                <address className={styles.Address}>
                    7 Avenue de Champalle<br/>
                    5530 Yvoir
                </address>
                <p><Mailto /></p>
                <p><a href="tel:+32 471 06 31 42">+32 471 06 31 42</a></p>
            </div>
        </div>
        <div className="container mt-8">
            <p className='font-xs justify-center flex gap-2'>
                <span>Copyright &copy; Tous droits réservés</span>
                <span aria-hidden>-</span>
                <Link href="mentions-legales">Mentions légales</Link>
            </p>
        </div>
    </footer>
}