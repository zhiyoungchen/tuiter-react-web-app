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
import mongoose from "mongoose";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect("mongodb+srv://zhiyoungchen:<cancer7120>@cluster0.bncaje3.mongodb.net/?retryWrites=true&w=majority");

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

