import json
class JsonWrapper:
    @classmethod
    def objToJson(cls,cred):
        cred.password=cred.password.__dict__
        return json.dumps(cred.__dict__,ensure_ascii=False,indent=4)
