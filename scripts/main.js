import { getDailyPhotos } from "./photoOfTheDay/PhotoDataProvider.js";

import DailyPhotoListComponent from "./photoOfTheDay/PhotoList.js";

getDailyPhotos().then(DailyPhotoListComponent);
