// initialize dot evnv
require("dotenv").config();

//import dependency files
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const axios = require('axios')

// Hold user action
let action = process.argv[2]


// //User Options
switch (action) {
case "concert-this":
concertThis(artist);
break;

case "spotify-this-song":
searchMusic();
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

     //Check to make input
     if (movieName){
          movieName = movieName
     }else{
          movieName ='Mr. Nobody'
     }
    

// request OMBD API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
     function (response) {

     //OMDB RESPONSE    
          console.log(`
        Title:        ${response.data.Title}
        Year:         ${response.data.Year}
        IMDB Rating:  ${response.data.imdbRating}
        RT. Rating:   ${response.data.Rated}
        Country:      ${response.data.Country}
        Language:     ${response.data.Language}
        Plot:         ${response.data.Plot}
        Actors:       ${response.data.Actors}
        Poster:       ${response.data.Poster}
        `)
     }
);
}


//Spotify Song
function searchMusic(){
     let songName = (process.argv).slice(3)    
     songName = songName.join('+')

     //Check to make input
     if (songName){
          songName = songName
     }else{
          songName ='The Sign'
     }
     
spotify
  .search({ type: 'track', query: songName,limit:1 })
  .then(function(response) {
      let resp = response.tracks.items[0]
     
    console.log(`
     Artist(s):${resp.album.artists[0].name}

     The song's name:${resp.name}

     A preview link of the song from Spotify:${resp.preview_url}

     The album that the song is from:${resp.album.name}
         `)
  })
  // The album that the song is from:${response.tracks.album.name}
  .catch(function(err) {
    console.log(err);
  });

}
