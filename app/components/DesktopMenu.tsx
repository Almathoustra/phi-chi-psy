import { cn } from "@/libs/utils";
import Menu from "./Menu";
import styles from "./DesktopMenu.module.css";

export default function DesktopMenu(){
    return <div className={cn(styles.DesktopMenuWrapper,'hidden', 'sm:block')}>
        <nav className={cn(styles.DesktopMenu, 'container')}>
            <Menu />
        </nav>
    </div>
}
    