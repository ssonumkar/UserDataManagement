import os
import platform
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH=os.path.join(ROOT_DIR,"config\config.json")
if "Users_Data" not in os.listdir(ROOT_DIR):
    os.mkdir(os.path.join(ROOT_DIR, "Users_Data"))
USER_PATH=os.path.join(ROOT_DIR,"Users_Data")
ENV="Windows" if "Windows" in platform.system() else "Linux"

