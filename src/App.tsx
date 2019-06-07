import React from 'react';
import { observer } from "mobx-react";
import { Instance } from "mobx-state-tree";
import logo from './logo.svg';
import './App.css';
import SupportingData from "./models/SupportingData";


interface AppProps {
  supportingDataModel: Instance<typeof SupportingData>
}

const App =
  observer(({supportingDataModel}: AppProps) => (
    <div className="App">
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <input type={"text"} onChange={(event: any) =>
        supportingDataModel.setPassedText(event.currentTarget.value)}/>
      <p>{supportingDataModel.passedText}</p>
    </div>
  ));


export default App;
