import os
import sys
import ftplib

FTP_HOST = os.environ.get("FTP_HOST", "ftp.a2z.7dd.mytemp.website")
FTP_USER = os.environ.get("FTP_USER", "clinilinkftp@clinilinkhealth.com")
FTP_PASS = os.environ.get("FTP_PASS", "Clinilink@ftp2026")
FTP_PORT = int(os.environ.get("FTP_PORT", 21))

LOCAL_DIST = os.path.abspath("dist")

def upload_directory(ftp, local_dir, remote_dir):
    print(f"Syncing {local_dir} -> remote {remote_dir or '/'}")
    for item in sorted(os.listdir(local_dir)):
        if item == ".DS_Store":
            continue
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}".replace("//", "/") if remote_dir else item

        if os.path.isdir(local_path):
            try:
                ftp.mkd(remote_path)
                print(f"Created remote directory: {remote_path}")
            except ftplib.error_perm:
                pass
            upload_directory(ftp, local_path, remote_path)
        else:
            with open(local_path, "rb") as f:
                file_size = os.path.getsize(local_path)
                print(f"Uploading {item} ({file_size} bytes) -> {remote_path}...", end=" ", flush=True)
                ftp.storbinary(f"STOR {remote_path}", f)
                print("DONE")

def main():
    print(f"Connecting to FTP server: {FTP_HOST}:{FTP_PORT}")
    ftp = ftplib.FTP()
    ftp.connect(FTP_HOST, FTP_PORT, timeout=60)

    print(f"Logging in as: {FTP_USER}")
    try:
        ftp.login(FTP_USER, FTP_PASS)
    except ftplib.error_perm as e:
        print(f"\n[ERROR] FTP Authentication failed: {e}")
        print("Please verify the FTP username and password.")
        sys.exit(1)

    print("FTP Login successful. Current working directory:", ftp.pwd())

    print("\nStarting recursive upload of complete dist/ to FTP server...")
    upload_directory(ftp, LOCAL_DIST, "")

    print("\nVerifying root directory contents on FTP server:")
    ftp.retrlines("LIST")

    # Check privacy-policy directory
    try:
        print("\nVerifying /privacy-policy directory contents on FTP server:")
        ftp.cwd("/privacy-policy")
        ftp.retrlines("LIST")
        ftp.cwd("/")
    except Exception as e:
        print("Note checking /privacy-policy:", e)

    ftp.quit()
    print("\nDeployment completed successfully!")

if __name__ == "__main__":
    main()
