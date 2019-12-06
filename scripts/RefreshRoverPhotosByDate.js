import {
  getCuriosityPhotos,
  getOpportunityPhotos,
  getSpiritPhotos
} from "./MarsPhoto/MarsPhotoProvider.js";
import MarsPhotoListComponent from "./MarsPhoto/MarsPhotoList.js";

let dateValue = "2016-07-05";

export const setDateEventListener = () => {
  const searchButton = document.querySelector("#search__button");

  const searchDateInput = document.querySelector("#searchDate");
  searchDateInput.value = dateValue;
  // Populates default date rover photos on load
  refreshMarsRoverPhotos();

  searchButton.addEventListener("click", theEvent => {
    dateValue = document.querySelector("#searchDate").value;
    // Populate new date rover data on search click
    refreshMarsRoverPhotos();
  });
};

const refreshMarsRoverPhotos = () => {
  getCuriosityPhotos(dateValue)
    .then(() => getOpportunityPhotos(dateValue))
    .then(() => getSpiritPhotos(dateValue))
    .then(() => MarsPhotoListComponent());
};
