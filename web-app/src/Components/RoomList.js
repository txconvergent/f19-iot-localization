import React, {useState,useEffect} from 'react'
import firebase from '../firebase'

function useRooms() {
    const [rooms,setRooms] = useState([]);
    
    useEffect(() => {
        firebase
            .firestore()
            .collection('roomPop1')
            .onSnapshot((snapshot) => {
                const newRooms = snapshot.docs.map((room) => ({
                    id: room.id,
                    ...room.data()
                }))
                setRooms(newRooms)
            })
    } ,[])

    return rooms
}


function RoomList() {

    const rooms = useRooms();

    return (
        <div>
            {rooms.map((room) => 
                <div>
                    {room.id} has {room.numb} people
                </div>
            )}
        </div>
    );
}

export default RoomList;