import MarsPhotoComponent from "./MarsPhoto.js";
import { useMarsPhotos, getRoverPhotos } from "./MarsPhotoProvider.js";

const contentElement = document.querySelector(".content__View");
const marsPhotos = useMarsPhotos()
const eventHub = document.querySelector(".container");

const MarsPhotoListComponent = () => {

  contentElement.innerHTML = `
<section class="marsPhotosCollection">
${marsPhotos.map(photo => {
  return MarsPhotoComponent(photo)
}).join(" ")}
  </section>
`

  eventHub.addEventListener("searchButtonClicked", event => {
    contentElement.innerHTML = ""
    // let newPhotos = {}

    getRoverPhotos(event.detail.date, event.detail.rover)
      .then(() => {
        contentElement.innerHTML = `
          <section class="marsPhotosCollection">
          ${marsPhotos.map(photo => {
                  return MarsPhotoComponent(photo)
                }).join(" ")}
            </section>`
      })
    })}
    export default MarsPhotoListComponent;