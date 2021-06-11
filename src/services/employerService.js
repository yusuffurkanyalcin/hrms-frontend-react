import axios from "axios";
export default class EmployerService{

    getAll(){
        return axios.get("http://localhost:8080/employer/getall")
    }

    addEmployer(employer){
        return axios({
            method:'post',
            url:'http://localhost:8080/employer/add',
            data:employer,
            responseType:"json"
        })
    }
}