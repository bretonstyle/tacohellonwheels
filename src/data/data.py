import requests
import os
import hashlib
import base64
import logging
username = os.environ.get('IRACING_USERNAME')
password = os.environ.get('IRACING_PASSWORD')

# Init logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s'

def encode_pw(username, password):
    initialHash = hashlib.sha256((password + username.lower()).encode('utf-8')).digest()

    hashInBase64 = base64.b64encode(initialHash).decode('utf-8')

    return hashInBase64

pwValueToSubmit = encode_pw(username, password)
body = "{\"email\": \"" + username + "\", \"password\": \"" + pwValueToSubmit + "\"}"
print (body)