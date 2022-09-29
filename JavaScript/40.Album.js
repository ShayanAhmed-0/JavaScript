function make_album(name, title, tracks) {
  if (!tracks) {
    let obj = {
      artist_name: name,
      album_title: title,
    };
    return obj;
  }
  let obj = {
    artist_name: name,
    album_title: title,
    numberof_tracks: tracks,
  };
  return obj;
}
let a = make_album("Michael Jackson", "Thriller");
let b = make_album("Jewel ", "Pieces of You", 19);
let c = make_album("Backstreet Boys", "Millennium",24);
console.log(a);
console.log(b);
console.log(c);
