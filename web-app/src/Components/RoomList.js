import React, {useState,useEffect} from 'react'
import firebase from '../firebase'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { VictoryChart } from 'victory';
import { VictoryLine } from 'victory';


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

function useData() {
    const [data,setData] = useState([{time: new Date().getHours(), pop:0}]);
    
    useEffect(() => {
        firebase
            .firestore()
            .collection('roomPop1')
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((room) => (
                    data.push({time:new Date().getHours(),pop:room.numb})
                ))
                setData(newData)
            })
    } ,[])

    return data
}


function RoomList() {

    const rooms = useRooms();
    const d = useData();

    return (
        <div>
            {rooms.map((room) => 
                <Card>
                    <CardContent>
                        <Typography align='center'>
                            {room.id} has {room.numb} people
                        </Typography>
                    </CardContent>
                </Card>
            )}
            <Typography align='center'>Wow, a fake graph</Typography>

            <Card align='center'>
            <VictoryChart style={{ parent: { maxWidth: "50%" }}}>
                    <VictoryLine
                        data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 6 }
                        ]}
                    />
                </VictoryChart>
            </Card>

           
        </div>
    );
}

export default RoomList;