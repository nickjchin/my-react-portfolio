import React from "react";
import resume from "../../images/resume.PNG";
import resumePDF from "../../documents/Nicholas-Chin's-Resume.pdf";

export default function Resume() {
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center" id="resume">
            R&eacute;sum&eacute;
          </h2>
        </div>
        <div className="resume-img text-center ">
          <img src={resume} className="img-responsive w-25 border mx-auto d-block"></img>
          <a href={resumePDF} target={"_blank"} className="resume">
            Open
          </a>
          <a href={resumePDF} download>
            Download
          </a>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center" id="skills">
              Skills
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
