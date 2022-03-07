from sqlalchemy import create_engine,MetaData,Table, Column, Integer, String,engine
from sqlalchemy.orm import sessionmaker,scoped_session
from Dao.configuration import UserManagementConstants
import json
import Dao
class database_details:
    def __init__(self):
        self.session ={}
        self.engine = None
        constants=UserManagementConstants()
        self.mysql_string = "mysql+pymysql://{user}:{passwd}@{host}:3306/{db_name}".format(
            user=constants.mysql_user,
            passwd=constants.mysql_passwd,
            host=constants.mysql_host,
            db_name=constants.mysql_db)
        self.engine = engine.create_engine(
            self.mysql_string,
            echo=False
        )

    def initialize(self):
        Dao.initialize_sql(self.engine)
    def initializeSession(self):
        self.session=scoped_session(Dao.session_factory)
    def getSession(self):
        return self.session

    def destroySession(self):
        self.session.expunge_all()
        self.session.close()
        self.session.remove()

    def deleteDataObj(self, obj):
        try:
            self.session.delete(obj)
            self.session.commit()
            self.session.flush()
        except Exception as e:
            print("An error occured ", e)
            print(e.args)
            self.session.rollback()

    def createDataObj(self, obj):
        try:
            self.session.add(obj)
            self.session.commit()
            self.session.flush()
            print("hi")
            return True
        except Exception as e:
            print("An error occured ", e)
            print(e.args)
            self.session.rollback()
            return None

    def createFromList(self, list):
        try:
            self.session.bulk_save_objects(list)
            self.session.commit()
            self.session.flush()
        except Exception as e:
            print("An error occured ", e)
            print(e.args)
            self.session.rollback()

    def objToJson(self, records):
        listOfRecords = []
        for row in records:
            d=row.__dict__
            d.pop("_sa_instance_state")
            listOfRecords.append(json.loads(json.dumps(d)))
        # dict={}
        # dict['items'] = [listOfRecords[i] for i in range(len(listOfRecords))]
        return listOfRecords
# d=database_details();
# print()
'''For a new User:
1. Tool would allow login to it only through PROD-USA. 
2. Upon login if this is the first time then he will be presented option to add his credentials as a new. 
	a. basically all the fields that we currently have in json would be provided in plain text through the tool. 
	b. Upon submit, these plain text data would be converted to their hashes and keys in the background automatically.
	c. The new data will then be uploaded to the ES and associated with the user's PROD-USA username. 
3. This first time creation would just have his bare data and the roles/access would be set to "none"/"no-access" by default. 
4. The user would then share the details in the Jira request and assign it to a PS Admin.
5. A PS Admin would then review his request, assign correct role ("super-admin") and access ("all")

For a user re-visiting to reset his local admin credentials:
1. Tool would allow login to it only through PROD-USA. 
2. User is directly presented his local admin credentials details and an option to change only his passwords/keys. 
3. After successful editing and saving he can then go back to the main page and select options of 
	a. Deploy on all PODs
	b. Deploy on select PODs
	c. Deploy on select VMs. 
4. Each option would either be linked with AWX or Ansible controller and run the jobs in background to deploy that user's creds. 
For user who have left the project: 
1. PS Admin can search for the user through list on the tool. 
2. Set their roles/access to "none"/"no-access". And select option to deploy on All pods, select pods, or select vms.'''