// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import { DataContext } from "./contexts";

export function VehicleForm(props) {
  return (
    <DataContext.Consumer>
      {({ vehicleDispatch }) => (
        <form
          action="#"
          method="post"
          onSubmit={(event) =>
            vehicleDispatch({ type: "add", event: event })
          }
        >
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
            />
          </p>
          <p>
            <label htmlFor="register_number">Register number:</label>
            <input
              type="text"
              name="register_number"
              required
            />
          </p>
          <input type="submit" value="Add vehicle" />
        </form>
      )}
    </DataContext.Consumer>
  );
}

export default VehicleForm;
