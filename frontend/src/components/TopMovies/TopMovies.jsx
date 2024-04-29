import React from "react";

const Top10Movies = () => {
  const topMovies = [
    { id: 1, title: "Movie 1", image: "movie1.jpg" },
    { id: 2, title: "Movie 2", image: "movie2.jpg" },
    { id: 3, title: "Movie 3", image: "movie3.jpg" },
    // Add more movies as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Top 10 Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topMovies.map((movie, index) => (
          <div key={movie.id} className="relative flex items-center justify-center">
            <div className="w-16 h-16 bg-black text-white text-center text-lg font-semibold rounded-full border border-white">{index + 1}</div>
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
              <p className="text-white text-lg font-semibold">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Movies;
