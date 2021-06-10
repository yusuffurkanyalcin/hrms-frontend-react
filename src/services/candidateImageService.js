import axios from "axios";

export default class CandidateImageService {
  url = "http://localhost:8080/candidate-image/get";
  getImageById(candidateId) {
    if (candidateId) {
      let newUrl = this.url;
      newUrl += "?candidateImageId=" + candidateId;
      return axios.get(newUrl);
    }
  }
}
