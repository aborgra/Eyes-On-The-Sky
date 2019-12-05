import MarsPhotoComponent from "./MarsPhoto.js";
import { useMarsPhotos } from "./MarsPhotoProvider.js";

const MarsPhotoListComponent = () => {
const contentElement = document.querySelector(".content__View");
const marsPhotos = useMarsPhotos()

contentElement.innerHTML += `
<section class="marsPhotosCollection">
${marsPhotos
  .map(singlePhoto => {
    return MarsPhotoComponent(singlePhoto);
  })
  .join("")}
  </section>
`
}

export default MarsPhotoListComponent;