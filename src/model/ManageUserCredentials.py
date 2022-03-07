from pprint import pprint
import os
import datetime
from pprint import pprint
import json

from model.CredentialJsonWrapper import JsonWrapper
from model.FileManager import FileManager
from model.win import win
from model.linux import linux
from model.Password import Password
import constants
class ManageUser:

    envi=constants.ENV
    user_data_path = constants.USER_PATH

    @classmethod
    def createNewUser(cls, username):
        id = FileManager.checkUniqueUser(username)
        filename = os.path.join(cls.user_data_path, "{}_{}".format( username,id))
        try:
            os.mkdir(filename)
            return id  # save user with this id in db
        except:
            return "duplicate username"

    @classmethod
    def addCredential(cls, cred, user_id):
        userPath = os.path.join(cls.user_data_path, "{}_{}".format(cred.cec_id,user_id))
        flag=FileManager.checkUniqueUser(cred.username)
        if  flag is None:  ## duplicate
            return None
        cred.id = flag
        #encrypt key and passwords
        cred=cls.encryptPassAndKeys(cls,cred)
        credFileName = os.path.join(userPath, "{}_{}.json".format( cred.username,cred.id))#set path
        try:
            with open(credFileName, 'w') as fp:
                fp.writelines(JsonWrapper.objToJson(cred))
            fp.close()
            return 1
        except:
            return None

    @classmethod
    def getCredentialByUserName(cls, username):
        with open(FileManager.getCredentialPathByUsername(username)) as fp:
            return json.load(fp)

    @classmethod
    def getAllCredentialsPerUser(cls, username):
        return FileManager.getCredentialsPerUser(username)

    @classmethod
    def updateCredential(cls, cred, username, loggedUser):
        with open(FileManager.getCredentialPathByUsername(username), 'r+') as fp:
            rec = json.load(fp)
            if loggedUser["username"] != rec["cec_id"]:  # denotes rec is been accessed by admin
                rec["access"] = cred['access']
                rec["roles"] = cred['roles']
            else: #modification of pass and ssh by user for specific fields
                if rec["ssh_key"]["public_key"]!=cred["ssh_key"]:
                    rec["ssh_key"]= win.genKey(username,cred["ssh_key"]) if cls.envi=="Windows" else linux.genKey(loggedUser["username"],cred["ssh_key"])  #encrypt ssh
                pass_temp=rec["password"]["usa"]
                if rec["password"]["usa"]!=cred["passwordUS"]:#check if modified
                    rec["password"]["usa"]=win.genpasswd(username,"usa",cred["passwordUS"])if cls.envi=="Windows" else linux.genpasswd(username,"usa",cred["passwordUS"])
                if rec["password"]["uae"] != cred["passwordUAE"]:
                    rec["password"]["uae"] = rec["password"]["usa"] if cred["passwordUAE"]==pass_temp else win.genpasswd(username, "uae", cred["passwordUAE"])if cls.envi=="Windows" else linux.genpasswd(username,"uae",cred["passwordUAE"])
                if rec["password"]["prc"] != cred["passwordPRC"]:
                    rec["password"]["prc"] = rec["password"]["usa"] if cred["passwordPRC"]==pass_temp else win.genpasswd(username, "prc", cred["passwordPRC"])if cls.envi=="Windows" else linux.genpasswd(username,"prc",cred["passwordPRC"])
                if rec["password"]["ind"] != cred["passwordIND"]:
                    rec["password"]["ind"] = rec["password"]["usa"] if cred["passwordIND"]==pass_temp else win.genpasswd(username, "ind", cred["passwordIND"])if cls.envi=="Windows" else linux.genpasswd(username,"ind",cred["passwordIND"])
                if loggedUser["isAdmin"]:  # modify Admin creds
                    rec["access"] = cred['access']
                    rec["roles"] = cred['roles']
            rec["modified"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        with open(FileManager.getCredentialPathByUsername(username), 'w') as fp:
            fp.writelines(json.dumps(rec, ensure_ascii=False, indent=4))
        return "updated";

    @classmethod
    def getAllCredentials(cls):
        return FileManager.getAllCredentials()

    @classmethod
    def encryptPass(cls, credentials):#replace with * for admin
        for cred in credentials:
            cred["password"]["ind"] = '*' * len(cred["password"]["ind"])
            cred["password"]["uae"] = '*' * len(cred["password"]["uae"])
            cred["password"]["usa"] = '*' * len(cred["password"]["usa"])
            cred["password"]["prc"] = '*' * len(cred["password"]["prc"])
            cred["ssh_key"] = '*' * len(cred["ssh_key"])
        return credentials
    def encryptPassAndKeys(self,cred):
        pass_temp=cred.password.usa
        if self.envi=="Windows":#encryption
            cred.ssh_key = win.genKey(cred.cec_id,cred.ssh_key)  #encrypt ssh
            cred.password.usa=pass_usa=win.genpasswd(cred.username,"usa",cred.password.usa) # encrypt pass
            cred.password.uae=pass_usa if cred.password.uae==pass_temp else win.genpasswd(cred.username,"uae",cred.password.uae) # check if pass is same as usa
            cred.password.prc=pass_usa if cred.password.prc==pass_temp else win.genpasswd(cred.username,"prc",cred.password.prc) # encrypt pass
            cred.password.ind=pass_usa if cred.password.ind==pass_temp else win.genpasswd(cred.username,"ind",cred.password.ind) # encrypt pass
        else:
            cred.ssh_key = linux.genKey(cred.cec_id,cred.sshkey)  # encrypt ssh
            cred.password.usa =pass_usa= linux.genpasswd(cred.username, "usa", cred.password.usa)  # encrypt pass
            cred.password.uae =pass_usa if cred.password.uae==pass_temp else  linux.genpasswd(cred.username, "uae", cred.password.uae)  # encrypt pass
            cred.password.prc =pass_usa if cred.password.prc==pass_temp else  linux.genpasswd(cred.username, "prc", cred.password.prc)  # encrypt pass
            cred.password.ind =pass_usa if cred.password.ind==pass_temp else  linux.genpasswd(cred.username, "ind", cred.password.ind)  # encrypt pass
        return cred

