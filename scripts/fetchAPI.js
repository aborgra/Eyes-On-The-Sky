// function to fetch API key info
const url = `https://api.nasa.gov/planetary/apod?api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`;

export const useAPIData = () => {
  return (
    fetch(url)
      .then(resp => resp.json())
      // transform the data into JSON
      .then(
        data =>
          function(data) {
            console.log(data);
            //create and add data to the html
          }
      )

      .catch(function(error) {
        console.log(error);
      })
  );
};
