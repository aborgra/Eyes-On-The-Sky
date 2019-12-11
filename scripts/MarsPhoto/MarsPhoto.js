
const MarsPhotoComponent = marsPhoto => {
  return `
  
  <section class="marsPhoto">
  <img class="marsPhoto_img" src=${marsPhoto.img_src}>
  <div>Rover: ${marsPhoto.rover.name}</div>
  <div>Camera: ${marsPhoto.camera.name}</div>
  <div>Date: ${new Date(marsPhoto.earth_date).toLocaleDateString("en-US")}</div>
  </section>

  <br>
  `;
};
export default MarsPhotoComponent;
