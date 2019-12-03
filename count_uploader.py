import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

service_key = "./ServiceAccountKey.json"

# todo put this somewhere else?
cred = credentials.Certificate(service_key)
firebase_admin.initialize_app(cred)
db = firestore.client()

users_ref = db.collection(u'rooms')
doc_ref = users_ref.document(u'room1')


def upload(n: int):
    doc_ref.set({
        u'numPeople': n
    })


def print_db():
    docs = users_ref.stream()

    for doc in docs:
        print(u'{} => {}'.format(doc.id, doc.to_dict()))
        break
