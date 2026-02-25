'use client'

import { MouseEventHandler, useEffect, useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import styles from './MobileMenu.module.css';
import { cn } from "@/libs/utils";
import CloseIcon from "./icons/CloseIcon";
import Menu from "./Menu";
import Brand from "./Brand";

export default function MobileMenu(){
    const [open, setOpen] = useState(false);
    const toggle:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    useEffect(() => {
        const listener = () => {
            if(open) setOpen(false);
        }
        document.addEventListener('click', listener);

        return () => {
            document.removeEventListener('click', listener);
        }
    },[open]);

    return <>
        <button type="button" className={cn('flex','sm:hidden',styles.MenuButton, open ? styles.open : null)} onClick={toggle} disabled={open} aria-label="Menu">
            <MenuIcon className={styles.Icon}/>
        </button>
        
        <nav className={cn(styles.MenuPane, open ? styles.open : null, 'sm:hidden')}>
            <button type="button" className={styles.MenuCloseButton} onClick={toggle} aria-label="Fermer le menu">
                <CloseIcon className={styles.Icon}/>
            </button>
            <div className={styles.BrandWrapper}>
                <Brand className={styles.Brand}/>
            </div>
            <Menu />
        </nav>
    </>
}