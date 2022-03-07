import random
class win:
    @classmethod
    def genKey(cls,user,passphrase):
        if passphrase==" ":
            return {"private_key": "dgfdsdsfd", "public_key": "tyuytfrft"}
        l=list(passphrase.upper())+list("auhdbladbyfwablavh")+list(user)
        pubKey=''.join(l)
        random.shuffle(l)
        privKey=''.join(l)
        return {"private_key": privKey, "public_key": pubKey}

    @classmethod
    def genpasswd(cls, user, zone, passwd):
        l=list(user+zone+passwd)
        random.shuffle(l)
        return ''.join(l)


# w=win()
# print(w.genpasswd("sagar","usa","kajsfakf"))
# print(w.createssh_key("sagar"))