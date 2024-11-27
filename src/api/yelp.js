import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XqQmY69NDTPFuFAVgFO-C3ewnjzcb7bF-4NPkL48vYeXv1v0qlDL5W6aEse_r0qbMENxvjbnEQXK95zm9J1DVhZc9tOYdqCyeNkXkzpT1rueu28hDblgySuIBjpEZ3Yx",
  },
});
