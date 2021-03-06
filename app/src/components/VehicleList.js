// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";
import { DataContext } from "./contexts";

import Vehicle from "./Vehicle";

class VehicleList extends React.Component {
  static contextType = DataContext;

  render() {
    let { vehicleState, fillupState } = this.context;
    return (
      <section className="container" id="vehicle-list">
        {vehicleState.map((vehicle, i) => (
          <Vehicle
            key={i}
            vehicle_id={vehicle.id}
            name={vehicle.name}
            register_number={vehicle.register_number}
            fillups={fillupState.filter((f) => f.vehicle_id === vehicle.id)}
          />
        ))}
      </section>
    );
  }
}

export default VehicleList;
