import React from "react";

export default function About() {
  return (
    <div className="container-fluid about">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-light mt-4">About Me</h2>
        </div>
      </div>
      <div className="row d-flex flex-row justify-content-center p-5 align-items-center">
        <div className="col-sm-4 ">
          <img
            src={"https://nickjchin.github.io/my-portfolio/assets/images/profile-img.jpg"}
            alt="picture of Nicholas"
            className="img-responsive"
          />
        </div>
        <div className="col-sm-4 border rounded p-5 bg-secondary text-light">
          <p>
            I am a 2017 Rutgers University graduate who majored in Information Technology &amp;
            Informatics and minored in Mathematics. While at Rutgers, I came to realize that I'm a
            creative and enjoyed problem solving through my Information Visualization, Web Design,
            and Math courses. I love the feeling when you put so much time and effort into a project
            and when you're done you say, "All the time and effort problem solving and creating the
            project was worth it".
          </p>
          <p>
            Since graduation, I've worked retail at Target as a fulfillment expert, fufilling
            customers order. I've interned as a Data Analyst at the Federal Bank of New York, and
            create a couple websites for small businesses.
          </p>
          <p>
            Starting July 2021, I've started attending the Rutgers Coding Bootcamp which met every
            weekday for 5 hours for 12 weeks. We learned about browser based techonologies such as
            HTML/CSS, JavaScript/jQuery, Responsive Design. Some other topics that were included
            databases (MySQL), server side development (MERN Stack), API Design, and Deployment
            (Heroku, GitHubPages). You can find my projects that I've worked on in the resume
            section of the website.
          </p>
        </div>
      </div>
    </div>
  );
}
