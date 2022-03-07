from sqlalchemy import create_engine,MetaData,Table, Column, Integer, String,Boolean
from sqlalchemy.orm import relationship
from Dao.database_init import database_details
from Dao import database, database_init,Base
from model.ManageUserCredentials import ManageUser
class User(Base):
    __tablename__ = 'Users'
    uid = Column(Integer, primary_key=True)
    username=Column(String(45),unique=True,nullable=False)
    isAdmin=Column(Boolean,nullable=False)
    db = database_details()
    def __init__(self,id,username,isAdmin=False):
        self.uid=id
        self.username=username;
        self.isAdmin=isAdmin
    @classmethod
    def getLoggedUser(cls):
        return "admin1"
    @classmethod
    def getUserByUserName(cls,username):
        try:
            return database.db.objToJson(database.db.getSession().query(User).filter(User.username==username).all())[0]
        except:
            return None
    @classmethod
    def getAllUSerNames(cls):
        try:
            list= [i[0] for i in database.db.getSession().query(User.username).all()]
            return list
        except:
            return None
    @classmethod
    def createNewUser(cls):
        database.db.createDataObj(User(ManageUser.createNewUser(User.getLoggedUser()),User.getLoggedUser()))
