from sqlalchemy import create_engine,MetaData,Table, Column, Integer, String,Boolean,ForeignKey
from sqlalchemy.orm import relationship
from Dao.database_init import database_details
from Dao import database, database_init,Base
from pprint import pprint
from model.User import User
import datetime
from model.ManageUserCredentials import ManageUser
class Credential():
    def __init__(self, name,cec_id, username, ssh_key, password, id=1,roles="none",access="no-access"):
        self.id=id
        self.name = name
        self.username=username
        self.cec_id = cec_id
        self.ssh_key = ssh_key
        self.password=password
        self.roles = roles
        self.access = access
        self.created=datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        self.modified=datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    @classmethod
    def addCredential(cls,cred):
        return ManageUser.addCredential(cred,User.getUserByUserName(User.getLoggedUser())["uid"])
    @classmethod
    def getAllCredentialsPerUser(cls, username):
        try:
            return ManageUser.getAllCredentialsPerUser(username)
        except:
            return None;

    @classmethod
    def getAllCredentials(cls):# for admin to get all creds
        try:
            return ManageUser.getAllCredentials()
        except:
            return None
    @classmethod
    def update(cls, cred, userName):
            return ManageUser.updateCredential(cred,userName,User.getUserByUserName(User.getLoggedUser()))

    @classmethod
    def getCredentialByCredUserName(cls, userName):
        try:
            return ManageUser.getCredentialByUserName(userName)
        except:
            return None
    @classmethod
    def encryptPass(cls, credentials):
        return ManageUser.encryptPass(credentials)