import { getDailyPhotos } from "./photoOfTheDay/PhotoDataProvider.js";
import DailyPhotoListComponent from "./photoOfTheDay/PhotoList.js";
import { getRoverPhotos } from "./MarsPhoto/MarsPhotoProvider.js";
import {setSearchEventListener} from "./EventListeners/RefreshRoverPhotosBySearch.js";
// import { refreshMarsRoverPhotos } from "./RefreshMarsPhotoFetch.js";
import MarsPhotoListComponent from "./MarsPhoto/MarsPhotoList.js";

// Initializing event listener and populating default search data
setSearchEventListener()
// Gets daily photo form API
getDailyPhotos().then(DailyPhotoListComponent);
getRoverPhotos("2015-06-03", "curiosity").then(MarsPhotoListComponent)
