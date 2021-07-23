import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import defaultImg from '../../imagesDef/default-img.jpg';
import * as api from '../../api/api';

const Casts = () => {
    const { movieId } = useParams();
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState();
    useEffect(() => {
        api.fetcCastsId(movieId).then(res => setmovieIdObj(res));
    }, [movieId]);

// console.log(movieIdObj)
    return (
        
        <ul>
            {movieIdObj && movieIdObj.map(castItem =>
                <li key={uuidv4()}>
                    <img src={imgBasePath + castItem.profile_path !== "https://image.tmdb.org/t/p/w500null"? imgBasePath + castItem.profile_path:defaultImg } width="50" alt={castItem.name}></img>
                    <p>Actor: {castItem.name}</p>
                    <p>Character: {castItem.character}</p>
                </li>)}

        </ul>
    )
};

export default Casts;

