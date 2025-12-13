'use client'

import { useEncryptedMailto } from './useEncryptedMailto';

type MailtoProps = {
    hash: string
    cypher: string;
}

export function EncryptedMailto(props: MailtoProps){
    const email = useEncryptedMailto(props.hash, props.cypher);
    return <a href={email.mailto}>{email.text}</a>
}