import * as ftp from "basic-ftp";

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: process.env.FTP_HOST || "ftp.a2z.7dd.mytemp.website",
            user: process.env.FTP_USER || "clinilinkftp@clinilinkhealth.com",
            password: process.env.FTP_PASS || "Clinilink@ftp2026",
            secure: false
        });
        console.log("Connected, starting upload...");
        await client.uploadFromDir("dist", "/");
        console.log("Upload completed successfully!");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    client.close();
}
deploy();
