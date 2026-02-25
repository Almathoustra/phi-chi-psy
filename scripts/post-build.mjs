import { Client } from "basic-ftp"
import 'dotenv/config';

uploadDist();

async function uploadDist() {
    const client = new Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PSW,
            port:process.env.FTP_PORT
        })
        console.log(await client.list())
        await client.ensureDir("www");
        await client.clearWorkingDir()
        await client.uploadFromDir("dist");
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}