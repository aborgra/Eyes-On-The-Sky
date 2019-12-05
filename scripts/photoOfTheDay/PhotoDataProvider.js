let dailyPhoto = {};

// const url = `https://api.nasa.gov/planetary/apod?api_key=`;

// const key = `adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`;

export const useDailyPhoto = () => {
  return dailyPhoto;
};

export const getDailyPhotos = () => {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`
  )
    .then(response => response.json())
    .then(res => dailyPhoto = res);

  // .then(parsedDailyPhotos => {
  //   console.log(parsedDailyPhotos);
  //   dailyPhotos = parsedDailyPhotos.slice();
};

// {
//   img_src: "img_src",
//   earth_date: "earth_date",
//   camera: {
//     name: "name"
//   }
// };

// export const usePhotos = () => {
//   return photos;
// };
/*
    Export a function that lets other components have
    access to the data
*/
