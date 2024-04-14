import requests
import os
import hashlib
import base64
import logging
import json
import pprint

from pathlib import Path

username = os.environ.get('IRACING_USERNAME')
password = os.environ.get('IRACING_PASSWORD')

# Init logging
logging.basicConfig(filename='data.log', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
pprint = pprint.PrettyPrinter(indent=4).pprint

def encode_pw(username, password):
    initialHash = hashlib.sha256((password + username.lower()).encode('utf-8')).digest()

    hashInBase64 = base64.b64encode(initialHash).decode('utf-8')

    return hashInBase64

pwValueToSubmit = encode_pw(username, password)
body = "{\"email\": \"" + username + "\", \"password\": \"" + pwValueToSubmit + "\"}"
logging.debug(body)

#Auth against iRacing. This will return a cookie-jar that we can use later. Do a POST with content type application/json using the body string as data
def get_cookie_jar():
    url = 'https://members-ng.iracing.com/auth'
    headers = {
        'Content-Type': 'application/json',
    }
    response = requests.post(url, headers=headers, data=body)
    response.raise_for_status()
    cookies = requests.utils.dict_from_cookiejar(response.cookies)
    Path("cookies.json").write_text(json.dumps(cookies))  # save them to file as JSON
    return response.cookies

cookies = get_cookie_jar()
#TODO: Use local cookies if file is present

#Get the data from the iRacing API. This will return a JSON object that we can use to get the data we need.
def get_recent_race_data():
    url = 'https://members-ng.iracing.com/data/stats/member_recent_races?cust_id=122694'
    response = requests.get(url, cookies=cookies)
    response.raise_for_status()
    return response.json()

data_object = get_recent_race_data()
logging.debug(data_object)
race_data=requests.get(data_object['link'])
race_data_dict = race_data.json()
logging.info(json.dumps(race_data_dict, indent=4, sort_keys=True))
