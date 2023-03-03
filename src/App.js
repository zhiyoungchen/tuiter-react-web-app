import React, {Component} from "react";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import {BrowserRouter} from "react-router-dom";
import tuiter from "./tuiter";
import {Route, Routes} from "react-router-dom";
import NavigationSidebar from "./tuiter/navigation-sidebar";
import Tuiter from "./tuiter";

export default class App extends Component {
  render() {

    return (
        <div>
          <Routes>
            <Route index element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>

        </div>
    )


  }
}
// export default App;

