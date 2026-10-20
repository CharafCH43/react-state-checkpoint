import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Lionel Messi",
        bio: "Professional football player known for his achievements and dedication.",
        imgSrc:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel%20Messi%202018.jpg",
        profession: "Football player",
      },
      shows: false,
      elapsedTime: 0,
    };

    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, elapsedTime } = this.state;

    return (
      <div className="app">
        <h1>React State Checkpoint</h1>

        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h2>{Person.fullName}</h2>
            <p>
              <strong>Bio:</strong> {Person.bio}
            </p>
            <p>
              <strong>Profession:</strong> {Person.profession}
            </p>
          </div>
        )}

        <p className="timer">
          Time since component mounted: {elapsedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;
