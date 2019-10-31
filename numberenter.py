import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./ServiceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

doc_ref = db.collection(u'roomPop1').document(u'entered')

users_ref = db.collection(u'roomPop1')

while True:

    try:
        doc_ref.set({
            u'numb': int(input("Enter a number to send to database: "))
        })

    except:
        print("please enter a number")
        continue

    docs = users_ref.stream()

    for doc in docs:
        print(u'{} => {}'.format(doc.id, doc.to_dict()))
