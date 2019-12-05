import { useDailyPhoto } from "./PhotoDataProvider.js";
import DailyPhotoComponent from "./Photo.js";
debugger;
const DailyPhotoListComponent = () => {
  const contentElement = document.querySelector(".content__Photo");
  const dailyPhoto = useDailyPhoto();

  console.table(dailyPhoto);

  contentElement.innerHTML += `${DailyPhotoComponent(dailyPhoto)}`;
};

export default DailyPhotoListComponent;
