import React from "react";
import resume from "../../images/resume.PNG";
import resumePDF from "../../documents/Nicholas-Chin's-Resume.pdf";

export default function Resume() {
  return (
    <div className="container-fluid m-0 resume">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mt-4">R&eacute;sum&eacute;</h2>
        </div>
        <div className="resume-img text-center ">
          <img src={resume} className="img-responsive w-25 border mx-auto d-block"></img>
          <a href={resumePDF} target={"_blank"} className="resume-links">
            Open
          </a>
          <a href={resumePDF} download>
            Download
          </a>
        </div>
        <div className="row my-5 ">
          <div className="col-12">
            <table className="table w-50 mx-auto table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col" className="text-center"></th>
                  <th scope="col" className="text-center">
                    <h2>Skills</h2>
                  </th>
                  <th scope="col" className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">HTML</td>
                  <td className="text-center">CSS</td>
                  <td className="text-center">JavaScript</td>
                </tr>
                <tr>
                  <td className="text-center">jQuery</td>
                  <td className="text-center">Bootstrap</td>
                  <td className="text-center">Bulma</td>
                </tr>
                <tr>
                  <td className="text-center">Node</td>
                  <td className="text-center">Express</td>
                  <td className="text-center">React</td>
                </tr>
                <tr>
                  <td className="text-center">MongoDB</td>
                  <td className="text-center">API's</td>
                  <td className="text-center">Handlebars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
