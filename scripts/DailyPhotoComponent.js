import { parsedAPIData } from "./parseAPIData.js";

const DailyPhotoComponent = async () => {
  const dailyPhoto = await parsedAPIData();
  const contentElement = document.querySelector(".content__Photo");
  contentElement.innerHTML += `<img class="dailyPhoto" src="${dailyPhoto}">`;
};

export default DailyPhotoComponent;
