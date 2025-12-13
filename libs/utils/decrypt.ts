import aesjs from 'aes-js';

export function decrypt(hash: string, key: string): string{
    const keyB = aesjs.utils.utf8.toBytes(key);
    const hashB = aesjs.utils.hex.toBytes(hash);
    const alg = new aesjs.ModeOfOperation.ctr(keyB);
    const rB = alg.decrypt(hashB);
    return aesjs.utils.utf8.fromBytes(rB);
}