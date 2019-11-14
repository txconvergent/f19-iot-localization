import React, {useState, useEffect} from 'react';
import {JSONKey} from '../ServiceAccountKey';


function TestComponent() {
    const [room, setRoom] = useState(0);
    const [people, setPeople] = useState(0);

    return (
        <div className="TestComponent">
            <div>
                <button onClick={() => {setRoom(r => r + 1)}}>Room</button>
                {room}
            </div>
            <div>
                <button onClick={() => {setPeople(p => p + 1)}}>People</button>
                {people}
            </div>
        </div>
    );
}

export default TestComponent;