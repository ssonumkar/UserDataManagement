import subprocess, sys
class linux:

    def bash_command(self,cmd):
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, executable="/bin/bash", shell=True)
        out, err = proc.communicate()
        return {"out": out, "error": err}
    @classmethod
    def genKey(cls,prodUSAuser, passphrase):
        out, err = cls.bash_command(
            "ssh-keygen -q -t rsa -N " + passphrase + " -b 4096 -C " + prodUSAuser + "@cisco.com -f " + prodUSAuser + " <<< y")
        privKey = ""
        pubKey = ""
        with open(prodUSAuser) as priv:
            privKey = priv.readlines()
        with open(prodUSAuser + ".pub") as pub:
            pubKey = pub.readlines()
        return {"private_key": privKey, "public_key": pubKey}
    @classmethod
    def genpasswd(cls,user, zone, passwd):
        res = cls.bash_command("openssl passwd -1 -salt " + user + "_" + zone + " " + passwd)
        return res["out"].decode("utf-8").strip()

