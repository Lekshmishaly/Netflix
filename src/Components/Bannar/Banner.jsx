import React, { useEffect, useState } from "react";
import { API_KEY, imagesUrl } from "../../Constants/Constants";
import axios from "../../axios";
import "./Bannar.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const refresh = Math.floor(Math.random() * 20);

    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[refresh]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imagesUrl + movie.backdrop_path : ""})`,
      }}
      className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <p className="discription">{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade-buttom"></div>
    </div>
  );
}
export default Banner;
