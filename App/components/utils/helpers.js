// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const nytAPI = "e0130c2a061f49eca6cca1992cc2d736";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (articlesearch) => {

    console.log(articlesearch);

    // Figure out the geolocation
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + articlesearch;

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function
export default helpers;
