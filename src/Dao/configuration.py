import json
from constants import CONFIG_PATH
class ConfigurationClass:
    def __init__(self):
        with open(CONFIG_PATH) as json_file:
            self.data = json.load(json_file)


Configuration = ConfigurationClass()


class UserManagementConstants:
    def __init__(self):
        self.mysql_host = Configuration.data["mysql"]["host"]
        self.mysql_user = Configuration.data["mysql"]["user"]
        self.mysql_passwd = Configuration.data['mysql']['passwd']
        self.mysql_db = Configuration.data['mysql']['db']