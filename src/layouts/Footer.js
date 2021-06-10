import React, { useState, useEffect } from "react";
import { Container, Menu } from "semantic-ui-react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";
import JobService from "../services/jobService";
import EmployerService from "../services/employerService";
import CityService from "../services/cityService";
export default function Footer() {
  const [jobs, setJobs] = useState([]);
  const [employers, setemployers] = useState([]);
  const [cities, setcities] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    let employerService = new EmployerService();
    let cityService = new CityService();
    jobService.getAll().then((result) => setJobs(result.data.data));
    employerService.getAll().then((result) => setemployers(result.data.data));
    cityService.getAllCity().then((result) => setcities(result.data.data));
  }, []);
  return (
    <div>
      <Menu>
        <Container className="footer">
          <Menu.Item>
            <ListGroup className="list-group list-group-flush">
              <ListGroupItem className="list-group-item active ">
                Sektöre Göre İş İlanları
              </ListGroupItem>
              {jobs.map((j) => (
                <ListGroupItem className="list-group-item" key={j.id}>
                  {j.title}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Menu.Item>
          <Menu.Item>
            <ListGroup className="list-group list-group-flush">
              <ListGroupItem className="list-group-item active ">
                Departmana Göre İş İlanları
              </ListGroupItem>
              {employers.map((e) => (
                <ListGroupItem className="list-group-item" key={e.id}>
                  {e.companyName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Menu.Item>
          <Menu.Item>
            <ListGroup className="list-group list-group-flush">
              <ListGroupItem className="list-group-item active ">
                İllere Göre İş İlanları
              </ListGroupItem>
              {cities.map((c) => (
                <ListGroupItem className="list-group-item" key={c.id}>
                  {c.cityName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
