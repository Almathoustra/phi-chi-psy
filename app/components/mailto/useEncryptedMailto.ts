'use client'

import { decrypt } from "@/libs/utils";
import { useEffect, useState } from "react";

export type MailtoState = {
    text:string;
    mailto: string;
}

const DEFAULT_MAILTO: MailtoState = {
    text: '',
    mailto:''
};

export function useEncryptedMailto(hash:string, cypher:string){
    const [mail, setMail] = useState(DEFAULT_MAILTO);
    
    useEffect(() => {
        const mail = decrypt(hash, cypher);

        setMail({
            mailto:`mailto:${mail}`,
            text: mail
        });
    },[hash, cypher]);

    return mail;
}