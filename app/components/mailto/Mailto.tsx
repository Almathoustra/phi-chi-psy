import 'dotenv/config';
import { EncryptedMailto } from "./EncryptedMailto";

export function Mailto(){
    const CYPHER = process.env.SITE_EMAIL_CYHPER;
    const HASH = process.env.SITE_EMAIL_HASH;

    if(!CYPHER || !HASH) return null;

    return <EncryptedMailto hash={HASH} cypher={CYPHER}/>
}