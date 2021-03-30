import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
const [recomm, setRecomm] = useState([]);

    const apiKey = `${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        const recommURL = `https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
        axios.get(recommURL).then((res) => {
          console.log(res.data.results);
          setRecomm(res.data.results);
        });
      }, []);

return (
<div>

</div>
)

}

export default Recommendations;

