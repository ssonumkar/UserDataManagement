from model.Password import Password
from model.User import User
from model.Credential import Credential
from flask import Blueprint, render_template, request, flash, redirect, url_for, abort

user_profile=Blueprint("user_profile",
                        __name__,
                        template_folder="templates",
                        static_folder="/static")

@user_profile.route("/updateUser/<userName>",methods={'GET'}) #get update form
@user_profile.route("/updateUser/<userName>",methods={'POST'})# save details
def updateUser(userName):
        user = User.getUserByUserName(User.getLoggedUser())
        cred=Credential.getCredentialByCredUserName(userName)
        if cred is None or cred["cec_id"] != user["username"] and not user["isAdmin"]:
            print("Access Denied")
            abort(401);
        if request.method=="GET":  # render modify page (form)
            cred["ssh_key"]=cred["ssh_key"]["public_key"]
            return render_template("home/userModify.html",rec=Credential.encryptPass([cred])[0] if user["username"]!=cred['cec_id'] else cred,user=user)#different modify views for user and admin ,encrypted data for admin

        if request.method=="POST": # get form and update it in db
            recordToUpdate=request.form
            if Credential.update(recordToUpdate,userName) is not None:
                flash("Rec updated Successfully")
                if cred["cec_id"]==user["username"] and cred["ssh_key"]["public_key"] != recordToUpdate["ssh_key"]:#modified ssh so display private and public
                    flash("Please remember private ssh_key as it will be displayed only once!!..")
                    return render_template("home/user.html",userRecord=Credential.getCredentialByCredUserName(userName),user=user)
                if user["isAdmin"]:
                    return redirect(url_for("user_profile.allUsers"))
                return redirect(url_for("user_profile.home"))# show only public ssh
            else:
                flash("Rec could not be updated because username should be unique please try again!")
                return redirect(url_for("user_profile.updateUser",userName=userName))


@user_profile.route("/user/<username>",methods={"GET"})
def showRecord(username):               #display credential as well as user data
       #display cred encrypted for admin and plane for user
        loggedUser=User.getUserByUserName(User.getLoggedUser())
        record = Credential.getCredentialByCredUserName(username)
        # print(record)
        record["ssh_key"]=record["ssh_key"]["public_key"]
        if record is None or record["cec_id"]!=loggedUser["username"] and not loggedUser["isAdmin"]:
            print("Access Denied")
            abort(401);
        return render_template("home/user.html",userRecord=Credential.encryptPass([record])[0] if loggedUser["username"]!=record['cec_id'] else record,user=loggedUser)

@user_profile.route( "/addCredential", methods={ "POST" , "GET" })
def addCredential():                                            # add new Credential
        flag=request.args.get("flag")
        loggedUser=User.getLoggedUser()
        if(flag=="new"): #e render form for new Credential
            return render_template("home/userModify.html",flag=flag,user=User.getUserByUserName(loggedUser))
        cred=None
        if request.form["username"] not in User.getAllUSerNames(): # check new cred usernames with usernames of users
            cred=Credential(request.form["name"],loggedUser,request.form["username"],request.form["ssh_key"],Password(request.form["passwordUS"],request.form["passwordUAE"],request.form["passwordPRC"],request.form["passwordIND"]))
        print(cred)
        if (cred is not None) and Credential.addCredential(cred) is not None: #denotes rec created and  inserted
            flash("Please remember private ssh_key as it will be displayed only once!!..")
            return render_template("home/user.html", userRecord=Credential.getCredentialByCredUserName(cred.username), user=loggedUser)
        else: #not inserted or duplicate username
            flash("UserName  already exists, try Again with different username or ssh_key !!")
            return render_template("home/userModify.html",flag='new',user=User.getUserByUserName(loggedUser))

@user_profile.route("/allUsers")
def allUsers():
        user=User.getUserByUserName(User.getLoggedUser())
        if not user["isAdmin"]:
            abort(401)
        dict=Credential.encryptPass(Credential.getAllCredentials());#add encryption to all passwords of all users
        return render_template("home/list_users.html",records=dict,user=user)

@user_profile.route("/createUser",methods={"GET"})
def createUser():                                   # create new User
        User.createNewUser()
        return redirect(url_for("user_profile.home"))

@user_profile.route("/home",methods={"GET"})
def home():                                         #home for user and admin
        user=User.getUserByUserName(User.getLoggedUser())
        creds=Credential.getAllCredentialsPerUser(user["username"])
        return render_template("home/list_users.html",records=creds,user=user,flag="user")