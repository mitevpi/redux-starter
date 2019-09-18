const React = require("react");
const { render } = require("react-dom");

// router
const { Route } = require("react-router-dom");
const { BrowserRouter } = require("react-router-dom");
const { hashHistory } = require("react-router-dom");

// redux
const { createStore } = require("redux");
const { Provider } = require("react-redux");
const votes = require("./reducers");

const store = createStore(votes);

/* Import Components */
const HelloWorld = require("./components/HelloWorld.jsx");
const About = require("./components/About.jsx");

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HelloWorld} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("main")
);
