import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const Home = () => {
  const { data, isLoading, isError, error , refetch } = useQuery(["data"], () => {
    axios
      .get("https://meowfacts.herokuapp.com/")
      .then((res) => {
        var joke =  document.getElementById("text")
        joke.textContent = res.data.data[0];
      });
  });
  if (isLoading) return <p>looding...</p>;
  if (isError) return <p>sorry, not work {error.message}</p>;
  return (
    <div>
      FACTS:
      <p id="text">{data}</p>
      <button onClick={refetch}>new joke</button>
    </div>
  );
};

export default Home;
