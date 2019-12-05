import { getDailyPhotos } from "./photoOfTheDay/PhotoDataProvider.js";
import DailyPhotoListComponent from "./photoOfTheDay/PhotoList.js";
import { getMarsPhotos, getOpportunityPhotos, getSpiritPhotos } from "./MarsPhoto/MarsPhotoProvider.js";
import MarsPhotoListComponent from "./MarsPhoto/MarsPhotoList.js";

getDailyPhotos().then(DailyPhotoListComponent);

getMarsPhotos()
.then(() => getOpportunityPhotos())
.then(() => getSpiritPhotos())
.then(() => MarsPhotoListComponent())