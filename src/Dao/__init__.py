from sqlalchemy.orm import sessionmaker,Session
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


def initialize_sql(engine):
    global session_factory
    session_factory = sessionmaker(bind=engine)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)
