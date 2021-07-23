import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api/api';

const Reviews = () => {
    const { movieId } = useParams();
      // const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState([]);
    useEffect(() => {
        api.fetcReviews(movieId).then(res => setmovieIdObj(res));
    }, [movieId]);

//   console.log(movieIdObj)
    return (<>
        {movieIdObj.length !== 0 ? <ul>
            {movieIdObj && movieIdObj.map(review =>
                <li key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>Review: {review.content}</p>
                </li>)}

        </ul> : 'We don`t have any reviews for this movie.'}
    </>
    )
};

export default Reviews;