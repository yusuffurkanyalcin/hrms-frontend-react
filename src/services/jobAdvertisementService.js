import axios from "axios";

export default class JobAdvertisementService {
  add(jobAdvertisement) {
    return axios({
      method: "post",
      url: "http://localhost:8080/job-advertisement/add",
      data: jobAdvertisement,
      responseType: "json",
    });
  }

  getAllActive() {
    return axios.get("http://localhost:8080/job-advertisement/getallactive");
  }

  getAllInActive() {
    return axios.get("http://localhost:8080/job-advertisement/inactives");
  }

  getById(id) {
    return axios.get(
      "http://localhost:8080/job-advertisement/getbyid?id=" + id
    );
  }
  getAllByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/job-advertisement/getallbyemployerid?employerId=" +
        employerId
    );
  }
}
