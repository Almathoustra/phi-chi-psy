import { cn } from '@/libs/utils';
import SkipLinkLayout from './SkipLinkLayout';

export default function TopSkipLink(){
    return <SkipLinkLayout>
        <a href="#content" className={cn('sr-only', 'focus:not-sr-only')}>Vers le contenu principal</a>
        <a href="#footer" className={cn('sr-only', 'focus:not-sr-only')}>Vers le pied de page</a>
    </SkipLinkLayout>
}