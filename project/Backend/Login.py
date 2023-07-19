from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['Project']
collection = db['LoginData']


@app.route('/verify', methods=['POST'])
def verify():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user_info = collection.find_one({'email': email})
    if '@' in email:
        user = email[:email.index('@')]
    else:
        user = email

    if user_info is not None and password == user_info['password']:
        return jsonify({'message': 'Valid user', 'user': user})

    return jsonify({'message': 'Wrong Email and/or Password'})


@app.route('/newUser', methods=['PUT'])
def newUser():

    data = request.get_json()
    email = data['email']
    password = data['password']
    result = collection.find_one({'email': email})
    #user = email[:email.index('@')]
    if result is not None:
        return jsonify({'message': 'User already exists'})
    else:
        collection.insert_one({'email': email, 'password': password})
        return jsonify({'message': 'new account created'})


app.run(port=2000, debug=True)
