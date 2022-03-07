import os
import json
from pprint import pprint

import constants
class FileManager:
    base_path= constants.USER_PATH
    @classmethod
    def checkUniqueUser(cls,username):
        usernames = []
        id=[]
        for user in os.listdir(cls.base_path):
            usernames.append(user.split("_")[0])
            id.append(int(user.split("_")[1]))
            for cred in os.listdir(os.path.join(cls.base_path, user)):
                    usernames.append(cred.split("_")[0])
                    id.append(int(cred.split("_")[1].split(".")[0]))
        print(usernames)
        if username in usernames:
            return None
        return 3000 if id==[] else min(id)-1
    @classmethod
    def getNextUserId(cls):
        return 3000 if len(os.listdir(cls.base_path))==0 else int(os.listdir(cls.base_path)[0].split("_")[1].split(".")[0])-1

    @classmethod
    def getAllCredentials(cls):
        creds=[]
        for dirname, dirs, files in os.walk(cls.base_path):
            for filename in files:
                filename_without_extension, extension = os.path.splitext(filename)
                if extension == '.json':
                    with open(os.path.join(dirname, filename), 'r') as fp:
                        creds.append(json.load(fp))
        return creds
    @classmethod
    def getCredentialPathByUsername(cls,username):
        for root,dir,files in os.walk(constants.USER_PATH):
            for file in files:
                if file.startswith(username):
                    return os.path.abspath(os.path.join(root, file))
    @classmethod
    def getCredentialsPerUser(cls,username):
        creds = []
        for user in os.listdir(constants.USER_PATH):
            if user.startswith(username):
                user_path=os.path.join(cls.base_path,user)
                for cred in os.listdir(user_path):
                    with open(os.path.join(user_path,cred),'r') as fp:
                        creds.append(json.load(fp))
                break
        return creds
    def setPath(self,path1,path2):
        return os.path.join(path1,path2)

# file=FileManager()
# pprint(file.getAllCredentials(constants.USER_PATH))
# pprint(file.getAllCredUserNames(constants.USER_PATH))
# pprint(file.getCredentialsPerUser("sagar"))
# pprint(file.getCredByUsername("add"))