//initialize dot ev=nv
require("dotenv").config();

//import dependency files
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const axios = require('axios')

const action = process.argv[2]
const artist = process.argv[3]

//User Options
switch (action) {
case "concert-this":
concertThis(artist);
break;

case "spotify-this-song":
playSpotify();
break;

case "movie-this":
withdraw();
break;

case "do-what-it-says":
lotto();
break;

default:
console.log('Please provide and instruction')
}
//Concert API

function concertThis(artist){
     axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then((err, response)=>{
     if(err){
           
     }
     console.log(response.data)
     })
}
//axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    









// function playSpotify(){
// spotify
//   .search({ type: 'track', query: 'I Want it That Way',limit:1 })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// }
