// import { refreshMarsRoverPhotos } from "../RefreshMarsPhotoFetch.js";

const eventHub = document.querySelector(".container");
const searchDateInput = document.querySelector("#searchDate");
const searchRoverInput = document.querySelector("#searchRover");

export const setSearchEventListener = () => {
  eventHub.addEventListener("click", e => {

    let dateValue = "2016-07-05";
    let roverValue = "curiosity";
    if (e.target.id === "search__button") {
      dateValue = searchDateInput.value;
      roverValue = searchRoverInput.value;
      const message = new CustomEvent("searchButtonClicked", {
        detail: {
          date: dateValue,
          rover: roverValue
        }
      });
      eventHub.dispatchEvent(message);
    }
   

  });

};
