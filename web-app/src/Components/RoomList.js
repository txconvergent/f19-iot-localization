import React, {useState,useEffect} from 'react'
import firebase from '../firebase'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


function useRooms() {
    const [rooms,setRooms] = useState([]);
    
    useEffect(() => {
        firebase
            .firestore()
            .collection('rooms')
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
            <Grid
                container
                spacing='8px'
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh', backgroundColor:"#030303"}}
            >
                {rooms.map((room) => 
                    <Card style={{width: "30vw", height: "30vw", margin: "20px", display:'flex', flexDirection: "column", alignItems: "center", justifyContent:'center', backgroundColor:'#090909'}}>
                        <Typography align='center' style={{fontWeight: "normal", fontSize:"200px", color:"#BB86FC"}} variant='h1'>
                            {room.numPeople}
                        </Typography>
                        <Typography align='center' style={{fontWeight: "normal", fontSize:"24px", color:"#BB86FC"}} >
                            PCL Study Room 1
                        </Typography>
                    </Card>
                )}

                <Card style={{width: "30vw", height: "30vw", margin: "20px", display:'flex', flexDirection: "column", alignItems: "center", justifyContent:'center', backgroundColor:'#090909'}}>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"200px", color:"#3801B4"}} variant='h1'>
                        3
                    </Typography>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"24px", color:"#3801B4"}} >
                        ECE Study Room 1
                    </Typography>
                </Card>

                <Card style={{width: "30vw", height: "30vw", margin: "20px", display:'flex', flexDirection: "column", alignItems: "center", justifyContent:'center', backgroundColor:'#090909'}}>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"200px", color:"#02D9C5"}} variant='h1'>
                        5
                    </Typography>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"24px", color:"#02D9C5"}} >
                        PCL 5th Floor
                    </Typography>
                </Card>

                <Card style={{width: "30vw", height: "30vw", margin: "20px", display:'flex', flexDirection: "column", alignItems: "center", justifyContent:'center', backgroundColor:'#090909'}}>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"200px", color:"#CF6679"}} variant='h1'>
                        5
                    </Typography>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"24px", color:"#CF6679"}} >
                        PCL Study Room 2
                    </Typography>
                </Card>

                <Card style={{width: "30vw", height: "30vw", margin: "20px", display:'flex', flexDirection: "column", alignItems: "center", justifyContent:'center', backgroundColor:'#090909'}}>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"200px", color:"#018786"}} variant='h1'>
                        5
                    </Typography>
                    <Typography align='center' style={{fontWeight: "normal", fontSize:"24px", color:"#018786"}} >
                        ECE Study Room 2
                    </Typography>
                </Card>

            </Grid>
            
        </div>
    );
}

export default RoomList;