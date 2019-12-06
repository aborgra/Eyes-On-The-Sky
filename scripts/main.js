import { getDailyPhotos } from "./photoOfTheDay/PhotoDataProvider.js";
import DailyPhotoListComponent from "./photoOfTheDay/PhotoList.js";

import {setDateEventListener} from "./RefreshRoverPhotosByDate.js";

// Initializing event listener and populating default search data
setDateEventListener()
// Gets daily photo form API
getDailyPhotos().then(DailyPhotoListComponent);

