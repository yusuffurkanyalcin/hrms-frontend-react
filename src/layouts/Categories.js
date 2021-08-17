import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
export default function Categories() {
  return (
    <div style={{marginLeft:20}}>
      
      <ul className="list-group list-group-flush" >
        <NavLink to="/add-job-advertisement"><li className="list-group-item" >
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            İş Başvurusu Oluştur 
            <FontAwesomeIcon
              icon={faFolderPlus}
              className="icon icon-create-job-advertisement "
              style={{ color: "green" }} 
            />
          </div>
        </li></NavLink>
        
        <br />
        <li className="list-group-item" >
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onaylanmış İş İlanları
            <FontAwesomeIcon
              icon={faClipboard}
              className="icon icon-approved-job-advertisement"
              style={{ color: "green" }}
            />
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onaylanmış İş Verenler
            <FontAwesomeIcon
              icon={faClipboard}
              className="icon icon-approved-employers"
              style={{ color: "green" }}
            />
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onaylanmış İş Arayanlar{" "}
            <FontAwesomeIcon
              icon={faClipboard}
              className="icon icon-approved-candidates"
              style={{ color: "green" }}
            />
          </div>
        </li>
        <br />
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onay Bekleyen İş İlanları
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="icon"
              style={{ color: "yellow" }}
            />
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onay Bekleyen İş Verenler
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="icon"
              style={{ color: "yellow" }}
            />
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center list-group-item-div">
            Onay Bekleyen İş Arayanlar
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="icon"
              style={{ color: "yellow" }}
            />
          </div>
        </li>
        
      </ul>
    </div>
  );
}
