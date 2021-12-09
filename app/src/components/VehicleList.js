// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { FillupDataContext } from './data-context.js';

import Vehicle from './Vehicle';

class VehicleList extends React.Component {
  static contextType = FillupDataContext;

  render() {
    let {vehicles} = this.context;
    return (
      <>
      {vehicles.map(vehicle => (
        <Vehicle
          name={vehicle.name}
          register_number={vehicle.register_number}
          fillups={vehicle.fillups}
        />
        ))}
      </>
    );
  }
}

export default VehicleList;
