import axios from "axios"

export default class CandidateService{

    getCandidates(){
        return axios.get("http://localhost:8080/candidates/getall")
    }

    addCandidate(candidate){
        return axios({
            method:"post",
            url:"http://localhost:8080/candidates/add",
            data:candidate,
            responseType:"json"
        })
    }
}