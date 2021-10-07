import React from "react";

export default function Welcome({ onLoad, setOnLoad }) {
  return (
    <div>
      <header className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Nicholas Chin</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#aboutme">
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {onLoad ? (
        <div className="container-fluid about">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-light m-0">About Me</h2>
            </div>
          </div>
          <div className="row d-flex flex-row justify-content-center p-5 align-items-center ">
            <div className="col-sm-4">
              <img
                src={"https://nickjchin.github.io/my-portfolio/assets/images/profile-img.jpg"}
                alt="picture of Nicholas"
                className="img-responsive"
              />
            </div>
            <div className="col-sm-4 border rounded p-4">
              <p>
                I am a 2017 Rutgers University graduate who majored in Information Technology &amp;
                Informatics and minored in Mathematics. While at Rutgers, I came to realize that I'm
                a creative and enjoyed problem solving through my Information Visualization, Web
                Design, and Math courses. I love the feeling when you put so much time and effort
                into a project and when you're done you say, "All the time and effort problem
                solving and creating the project was worth it".
              </p>
              <p>
                Since graduation, I've worked retail at Target, interned as a Data Analyst at the
                Federal Bank of New York, and create a couple websites for small businesses.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // If Not onLoad, shows projects
        <div className="container-fluid m-0 project-card-group">
          <h2 className="text-center text-light p-4" id="work">
            Projects
          </h2>
          <div className="row d-flex justify-content-around p-5 align-items-center">
            {/* Card 1 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Baseball Direct</h4>
                </div>
                <img
                  src={
                    "https://nickjchin.github.io/my-portfolio/assets/images/baseball-direct-snippet.PNG"
                  }
                  alt="screenshot of baseball direct"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">Group project using multiple APIs and Bulma</p>
                  <a
                    href="https://mrohmann.github.io/BaseballDirect/"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/mrohmann/BaseballDirect"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Stock Shout</h4>
                </div>
                <img
                  src={"https://nickjchin.github.io/my-portfolio/assets/images/stock-shout.PNG"}
                  alt="screenshot of stock shout app"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">
                    Created using with Node, Express, Sequelize, MySQL, and Handlebars. Stock Shout
                    allows the user to create an account, login, save a list of apps to their
                    watchlist, and view tweets and stock information
                  </p>
                  <a
                    href="https://stock-shout.herokuapp.com/"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/nickjchin/stock-shout"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Work Day Scheduler</h4>
                </div>
                <img
                  src={
                    "https://nickjchin.github.io/my-portfolio/assets/images/workday-scheduler.PNG"
                  }
                  alt="screenshot of work day scheduler app"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">
                    Created using third party APIs like Moment.js, Twitter-Bootstrap, and Google
                    Fonts
                  </p>
                  <a
                    href="https://nickjchin.github.io/work-day-scheduler"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/nickjchin/work-day-scheduler"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Weather Dashboard</h4>
                </div>
                <img
                  src={
                    "https://nickjchin.github.io/my-portfolio/assets/images/weather-dashboard.PNG"
                  }
                  alt="screenshot of weather dashboard app"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">
                    Created using server-side API from OpenWeather API to display the current
                    weather and 5 day forecasts for selected cities
                  </p>
                  <a
                    href="https://nickjchin.github.io/weather-dashboard"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/nickjchin/weather-dashboard"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Note Taker</h4>
                </div>
                <img
                  src={"https://nickjchin.github.io/my-portfolio/assets/images/note-taker.PNG"}
                  alt="screenshot of note taker app"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">
                    Created using HTML, CSS, Bootstrap, Node and Express. Note Taker is hosted on
                    Heroku and the app allows the user to create and notes.
                  </p>
                  <a
                    href="https://note-taker-njc.herokuapp.com/"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/nickjchin/note-taker"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">Team Profile Generator</h4>
                </div>
                <img
                  src={
                    "https://nickjchin.github.io/my-portfolio/assets/images/team-profile-genertor.PNG"
                  }
                  alt="screenshot of team profile generator app"
                  className="img-responsive"
                />
                <div className="card-body">
                  <p className="card-text">Description:</p>
                  <p className="card-text">
                    Created using with Node, HTML, CSS, and Bootstrap. Team Profile Generator is a
                    command-line application that accepts user input to generate their team members
                    and information
                  </p>
                  <a
                    href="https://nickjchin.github.io/my-portfolio/team.html"
                    target="_blank"
                    className="btn btn-primary mr-1"
                  >
                    Live Production
                  </a>
                  <a
                    href="https://github.com/nickjchin/team-profile-generator"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
