// import { refreshMarsRoverPhotos } from "../RefreshMarsPhotoFetch";


let marsPhotos = [];

export const useMarsPhotos = () => {
  return marsPhotos;
};





export const getRoverPhotos = (date, rover) => {
  return fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`
  )
  
    .then(response => response.json())
    
    // .then(res => marsPhotos = res.photos)
    .then((parsedMarsPhotos) => {
      marsPhotos.length = 0

            parsedMarsPhotos.photos.forEach(element => {


              marsPhotos.push(element)
            })
          })
      
};

//  export const getOpportunityPhotos = (date) => {
//   return fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`
//   )
//     .then(response => response.json())
//     .then((parsedMarsPhotos) => {
//       parsedMarsPhotos.photos.forEach(element => {
//         marsPhotos.push(element)
//       })
//     })
// }

// export const getSpiritPhotos = (date) => {
//   return fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`
//   )
//     .then(response => response.json())
//     .then((parsedMarsPhotos) => {
//       parsedMarsPhotos.photos.forEach(element => {
//         marsPhotos.push(element)
//       })
//     });
// }


// Next steps: Fetch API data from the other rovers, .push to a single array, filter through the array, display only those results
