// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";
import AddFillupForm from "./AddFillupForm";
import Modal from "./Modal";
import VehicleList from "./VehicleList";
import GlobalStats from "./GlobalStats";
import vehicles from "../vehicle-data.json";
import { FillupDataContext, ModalContext } from "./data-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModalVisibility = () => {
      console.log("ajetaan");
      this.setState(state => ({
        modalVisibility: state.modalVisibility === true ? false : true
      }));
    };
    this.state = {
      modalVisibility: false,
      toggleModalVisibility: this.toggleModalVisibility,
    };
  }
  render() {
    return (
      <FillupDataContext.Provider value={vehicles}>
        <GlobalStats />
        <ModalContext.Provider value={this.state}>
          <VehicleList />
          <AddFillupForm />
          <Modal />
        </ModalContext.Provider>
      </FillupDataContext.Provider>
    );
  }
}

export default App;
