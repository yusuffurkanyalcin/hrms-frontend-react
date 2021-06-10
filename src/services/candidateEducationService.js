import axios from "axios";

export default class CandidateEducationService {
  url = "http://localhost:8080/candidate-educations/getall";

  getAllByCandidateId(candidateId) {
    if (candidateId) {
      let newUrl = this.url;
      newUrl += "?candidateId=" + candidateId;
      return axios.get(newUrl);
    }
    return axios.get(this.url);
  }

  add(candidateEducation) {
    return axios.post(url + "/add", candidateEducation);
  }
}
