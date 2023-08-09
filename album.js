"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 40 */
function make_album(artist_name, album_title, track) {
    return {
        artist_name,
        album_title,
        track
    };
}
const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2", 2);
const album3 = make_album("Artist 3", "Album 3", 3);
console.log(album1);
console.log(album2);
console.log(album3);
