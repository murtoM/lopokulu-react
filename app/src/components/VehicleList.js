// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { FillupDataContext } from './contexts';

import Vehicle from './Vehicle';

class VehicleList extends React.Component {
  static contextType = FillupDataContext;

  render() {
    let {vehicleState} = this.context;
    return (
      <section className="container" id="vehicle-list">
        {vehicleState.vehicles.map((vehicle, i) => (
          <Vehicle
            key={i}
            vehicle_key={i}
            name={vehicle.name}
            register_number={vehicle.register_number}
            fillups={vehicle.fillups}
          />
        ))}
      </section>
    );
  }
}

export default VehicleList;
