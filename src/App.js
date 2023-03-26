import React, {Component} from "react";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import {Route, Routes} from "react-router-dom";
import Tuiter from "./tuiter";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});
export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
        <Routes>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
        </div>
        </Provider>
    )


  }
}
// export default App;

