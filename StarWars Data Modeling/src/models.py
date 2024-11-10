import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
    name = Column(String(250), nullable=False)
    surname = Column(String(250), nullable=False)
    phone_number = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    inscriptionDate = Column(String(250), nullable=False)

class Address(Base):
    __tablename__ = 'address'
    id = Column(Integer, primary_key=True)
    street_name = Column(String(250))
    street_number = Column(String(250))
    postal_code = Column(String(250), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'))

class Favorite_list(Base):
    __tablename__ = "favorite_list"
    id = Column(Integer, primary_key=True)
    planet_id = Column(Integer, ForeignKey('planet.id'))
    character_id = Column(Integer, ForeignKey('character.id'))
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))
    user_id = Column(Integer, ForeignKey('user.id'))

class Planet(Base):
    __tablename__ = "planet"
    id = Column(Integer, primary_key=True)
    name = Column(String(250))
    description = Column(String(250))
    size = Column(Integer)
    favorite_list_id = Column(Integer, ForeignKey('favorite_list.id'))

class Character(Base):
    __tablename__ = "character"
    id = Column(Integer, primary_key=True)
    name = Column(String(250))
    description = Column(String(250))
    age = Column(Integer)
    weapon = Column(String(250))
    favorite_list_id = Column(Integer, ForeignKey('favorite_list.id'))

class Vehicle(Base):
    __tablename__ = "vehicle"
    id = Column(Integer, primary_key=True)
    name = Column(String(250))
    description = Column(String(250))
    age = Column(Integer)
    weapon = Column(String(250))
    favorite_list_id = Column(Integer, ForeignKey('favorite_list.id'))
    

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')
