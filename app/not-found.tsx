import { cn } from '@/libs/utils'
import Link from 'next/link';
import styles from './not-found.module.css';
 
export default function NotFound() {
  return (
    <main className={cn("container", styles.NotFound)}>
        <div>
            <h1 className='mb-6 font-2xl font-bold'>Not Found</h1>
            <p className='mb-3'>La page que vous recherchez est introuvable</p>
            <Link href="/">Accueil</Link>
        </div>
    </main>
  )
}