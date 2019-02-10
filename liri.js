// initialize dot evnv
require("dotenv").config();

//import dependency files
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const axios = require('axios')

// Hold user action
let action = process.argv[2]

//User Options
switch (action) {
case "concert-this":
concertThis(artist);
break;

case "spotify-this-song":
playSpotify();
break;

case "movie-this":
searchMovie();
break;

case "do-what-it-says":
lotto();
break;

default:
console.log('Please provide and instruction')
}
//Concert API


//OMBD movie request and response
function searchMovie(){
     let movieName = (process.argv).slice(3)    
     movieName = movieName.join('+')
    

// request OMBD API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
     function (response) {
          console.log("Release Year: " + response.data.Year);
          console.log(`
        Title of the movie: ${response.data.Title}
        Year the movie came out:${response.data.Year}
        IMDB Rating of the movie:${response.data.imdbRating}
        Rotten Tomatoes Rating of the movie:${response.data.Rated}
        Country where the movie was produced:${response.data.Country}
        Language of the movie:${response.data.Language}
        Plot of the movie:${response.data.Plot}
        Actors in the movie:${response.data.Actors}
        Poster of the movie:${response.data.Poster}
        `)
     }
);
}



