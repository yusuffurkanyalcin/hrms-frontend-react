import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  "../css/Categories.css";
export default function Categories() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">İş Başvurusu Oluştur</li>
        <br/>
        <li className="list-group-item">Onaylanmış İş İlanları</li>
        <li className="list-group-item">Onaylanmış İş Verenler</li>
        <li className="list-group-item">Onaylanmış İş Arayanlar</li>
        <br/>
        <li className="list-group-item">Onay Bekleyen İş İlanları</li>
        <li className="list-group-item">Onay Bekleyen İş Verenler</li>
        <li className="list-group-item">Onay Bekleyen İş Arayanlar</li>
      </ul>
    </div>
  );
}
