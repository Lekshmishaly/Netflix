import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import { imagesUrl, API_KEY } from "../../Constants/Constants";
import axios from "../../axios";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        alert("NetWork Error");
      });
  }, []);

  const opts = {
    height: "370",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    if (toggle) {
      console.log(id);
      axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0 && toggle) {
            setUrlId(response.data.results[0]);
            setToggle(false);
          } else {
            alert("This Trailer not currently Available");
            console.log("This Trailer not currently Available");
          }
        });
    } else {
      setUrlId("");
      setToggle(true);
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj, index) => (
          <img
            key={index}
            className={props.isSmall ? "smallPoster" : "poster"}
            onClick={() => handleMovie(obj.id)}
            src={`${imagesUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
