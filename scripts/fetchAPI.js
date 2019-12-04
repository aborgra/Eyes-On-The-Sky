// function to fetch API key info
const url = `https://api.nasa.gov/planetary/apod?api_key=`;
const key = `adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`;

const useAPIData = async () => {
  const result = await fetch(url + key);

  return result.json();
};

export default useAPIData;
