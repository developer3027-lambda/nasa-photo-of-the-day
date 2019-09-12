import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

function CardInfo()  {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            const info = response.data;
            setInfo(info);
            console.log(info);
        })
        .catch(error => {
            console.log('caught from response: ', error);
        })
    },[])

    return(
        <div>
            <NasaCard info={info}/>
        </div>
    )
}
export default CardInfo;