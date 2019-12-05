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

  } 
