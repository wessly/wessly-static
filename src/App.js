import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import MathPage from "./pages/MathPage";
import TechPage from "./pages/TechPage";

import Math from "./functions/Math";
import Tech from "./functions/Tech";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/math" component={MathPage}/>
            <Route exact path="/tech" component={TechPage}/>
  
            <Route path="/math/level/:id" component={Math} />
            <Route path="/tech/level/:id" component={Tech} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
