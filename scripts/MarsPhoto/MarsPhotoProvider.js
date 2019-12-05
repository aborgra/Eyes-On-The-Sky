let marsPhotos = [];

export const useMarsPhotos = () => {
  return marsPhotos;
};
// const apiurl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key="
// const key = "adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw"

export const getMarsPhotos = () => {
  return fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw"
  )
    .then(response => response.json())
    .then(parsedMarsPhotos => {
      console.table(parsedMarsPhotos.photos);
      marsPhotos = parsedMarsPhotos.photos.slice();
    });
};

// Next steps: Fetch API data from the other rovers, .push to a single array, filter through the array, display only those results
