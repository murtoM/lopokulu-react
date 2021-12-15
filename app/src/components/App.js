// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React, {useReducer} from "react";
import Modal from "./Modal";
import VehicleList from "./VehicleList";
import GlobalStats from "./GlobalStats";
import vehicles from "../vehicle-data.json";
import { FillupDataContext, ModalContext, initialModalState } from "./contexts";
import { vehicleReducer, modalReducer } from "./reducers";

function App() {
  const [modalState, modalDispatch] = useReducer(modalReducer, initialModalState);
  const [vehicleState, vehicleDispatch] = useReducer(vehicleReducer, vehicles);

  return (
    <FillupDataContext.Provider value={{vehicleState, vehicleDispatch}}>
      <GlobalStats />
      <ModalContext.Provider value={{modalState, modalDispatch}}>
        <VehicleList />
        <Modal />
      </ModalContext.Provider>
    </FillupDataContext.Provider>
  );
}

export default App;
