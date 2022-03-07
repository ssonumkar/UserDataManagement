from flask import Flask ,render_template ,redirect ,url_for
from Dao import database, database_init
from model.FileManager import FileManager
from model.User import User
from portal.views.user import user_profile
app=Flask(__name__)
app.register_blueprint(user_profile)
import constants
import os

@app.before_first_request
def initialezeDb():
    database.db=database_init.database_details()
    database.db.initialize()

@app.before_request
def before_request():
    database.db.initializeSession()
@app.route("/")
def home():
    username=User.getLoggedUser()
    user=User.getUserByUserName(User.getLoggedUser())
    if user is None:# new User
        return redirect(url_for("user_profile.createUser",username=username))

    if user["isAdmin"]:#if admim is entered in db ,check if directory is created
        flag=FileManager.checkUniqueUser(username)
        # print("hi",flag)
        if flag is not None:# create admin dir username not available
            os.mkdir(os.path.join(constants.USER_PATH,"{}_{}".format(username,flag)))
    return redirect(url_for("user_profile.home")) # user

app.secret_key='12431243214'
if __name__=="__main__":
    app.run(debug=True)