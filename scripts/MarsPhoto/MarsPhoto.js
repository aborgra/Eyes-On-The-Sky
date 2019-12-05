const MarsPhotoComponent = marsPhoto => {
  return `
  
  <section class="marsPhoto">
  <img class="marsPhoto_img" src=${marsPhoto.img_src}>
<div>Camera: ${marsPhoto.camera.full_name}</div>
<div>Date: ${new Date(marsPhoto.earth_date).toLocaleDateString(
  "en-US"
)}
  </section>

  <br>
  `
}
export default MarsPhotoComponent;