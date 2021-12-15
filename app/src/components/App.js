// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React, { useReducer, useEffect } from "react";
import Modal from "./Modal";
import VehicleList from "./VehicleList";
import GlobalStats from "./GlobalStats";
import VehicleAdditionButton from "./VehicleAdditionButton";
import { vehicles, fillups } from "../initial-data.json";
import { DataContext, ModalContext, initialModalState } from "./contexts";
import { vehicleReducer, modalReducer, fillupReducer } from "./reducers";

function App() {
  const raw_ls_vehicles = localStorage.getItem("vehicles");
  const raw_ls_fillups = localStorage.getItem("fillups");

  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState
  );
  const [vehicleState, vehicleDispatch] = useReducer(
    vehicleReducer,
    JSON.parse(raw_ls_vehicles) || vehicles
  );
  const [fillupState, fillupDispatch] = useReducer(
    fillupReducer,
    JSON.parse(raw_ls_fillups) || fillups
  );

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicleState));
  }, [vehicleState]);
  useEffect(() => {
    localStorage.setItem("fillups", JSON.stringify(fillupState));
  }, [fillupState]);

  return (
    <DataContext.Provider
      value={{ vehicleState, vehicleDispatch, fillupState, fillupDispatch }}
    >
      <GlobalStats />
      <ModalContext.Provider value={{ modalState, modalDispatch }}>
        <VehicleList />
        <VehicleAdditionButton />
        <Modal />
      </ModalContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
