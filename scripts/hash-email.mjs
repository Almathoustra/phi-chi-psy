import aesjs from 'aes-js';
import 'dotenv/config';

const key = process.env.SITE_EMAIL_KEY;
const mail = process.env.SITE_EMAIL;

const keyB = aesjs.utils.utf8.toBytes(key);
const mailB = aesjs.utils.utf8.toBytes(mail);
const alg = new aesjs.ModeOfOperation.ctr(keyB);

const cypherB = alg.encrypt(mailB);
const cypher = aesjs.utils.hex.fromBytes(cypherB);

console.log(cypher);
