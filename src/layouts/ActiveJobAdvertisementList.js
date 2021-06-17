import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ActiveJobAdvertisementList.css";
import { Button, Card, Container } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function ActiveJobAdvertisementList() {
  const [jobadvertisements, setjobadvertisements] = useState([]);
  useEffect(() => {
    let jobadvertisementService = new JobAdvertisementService();
    jobadvertisementService
      .getAllInActive()
      .then((result) => setjobadvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Container className="active-jobadvertisements">
        <h5>İLANLAR</h5>
        <hr />
        <Card.Group>
          {jobadvertisements.map((j) => (
            <Card key={j.id} style={{ backgroundColor: "#F8F9F9" }}>
              <Card.Content>
                <Card.Header>{j.jobTitle.title}</Card.Header>
                <Card.Meta>{j.employer.companyName}</Card.Meta>
                <Card.Description>
                  <strong>Telefon : </strong>
                  {j.employer.phoneNumber}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button color="green">Detaya git..</Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </div>
  );
}
