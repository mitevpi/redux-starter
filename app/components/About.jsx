const React = require("react");
const { Link } = require("react-router-dom");
const VoteContainer = require("../containers/VoteContainer.jsx");

/* the main page for the about route of this app */
const About = () => {
  return (
    <div>
      <h1>About</h1>

      <p>
        This is a starter react app use react-redux to manage state - try rating
        this app below to see it in action!
      </p>

      <VoteContainer label="Upvote or downvote this app!" />

      <Link to="/">Go home</Link>
    </div>
  );
};

module.exports = About;
