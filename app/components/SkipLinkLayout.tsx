import { PropsWithChildren } from "react";
import { cn } from "@/libs/utils";
import styles from './SkipLinkLayout.module.css';


export default function SkipLinkLayout({children}:PropsWithChildren){
    return <nav className={cn(styles.SkipLinkLayout, 'hidden', 'sm:block')}>{children}</nav>
}