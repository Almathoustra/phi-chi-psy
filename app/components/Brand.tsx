import Link from "next/link";
import styles from "./Brand.module.css";
import { cn, PropsWithClassName } from "@/libs/utils";

export type BrandProps = PropsWithClassName<{
    withAgreementNumber?:boolean;
}>

export default function Brand(props:BrandProps){
    return <Link href="/" className={cn(styles.Brand, props.className)}>
        <span className={styles.LogoWrapper}>
            <span className={styles.SideLine}/>
            <span className={styles.Logo}>&phi;&chi;&psi;</span>
            <span className={styles.SideLine}/>
        </span>
        <span className={styles.Owner}>Philippe Anciaux - Psychologue</span>
        {
            props.withAgreementNumber
                ? <span className={styles.Number}>791206463</span>
                : null
        }
    </Link>
}