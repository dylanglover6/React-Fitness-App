import axios from "axios";

export default {
	getExercise: function() {
    	return axios.get("https://wger.de/api/v2/exercise/?format=json");
  	},
  	getExerciseImage: function() {
    	return axios.get("https://wger.de/api/v2/exerciseimage/?format=json");
  	},
  	getExerciseInfo: function() {
    	return axios.get("https://wger.de/api/v2/exerciseinfo/?format=json");
  }
};