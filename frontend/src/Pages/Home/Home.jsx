import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import requests from "../../utils/request";
import Hero from "../../components/Hero/Hero";
import Row from "../../components/Row/Row";

function Home() {

  const [moviePosters, setMoviePosters] = useState(null);
  const [trendingNow, setTrendingNow] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          moviePostersData,
          trendingNowData,
          topRatedData,
          actionMoviesData,
          comedyMoviesData,
          horrorMoviesData,
          romanceMoviesData,
          documentariesData,
        ] = await Promise.all([
          fetch(requests.fetchMoviePosters).then((res) => res.json()),
          fetch(requests.fetchTrending).then((res) => res.json()),
          fetch(requests.fetchTopRated).then((res) => res.json()),
          fetch(requests.fetchActionMovies).then((res) => res.json()),
          fetch(requests.fetchComedyMovies).then((res) => res.json()),
          fetch(requests.fetchHorrorMovies).then((res) => res.json()),
          fetch(requests.fetchRomanceMovies).then((res) => res.json()),
          fetch(requests.fetchDocumentaries).then((res) => res.json()),
        ]);

        setMoviePosters(moviePostersData.results);
        setTrendingNow(trendingNowData.results);
        // Update other state variables similarly...
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Update loading state when fetching is complete
      }
    };

    fetchData();
  }, []);

  console.log("moviePosters", moviePosters); // Log state inside useEffect
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Hello World");
  console.log(trendingNow);

  return (
    <>
      <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
        {/* <Hero moviePosters={moviePosters} /> */}
        <section className="container pb-32">
        <Row title="Trending Now" movies={trendingNow} />
        </section>
      </main>
    </>
  );
}

export default Home;
