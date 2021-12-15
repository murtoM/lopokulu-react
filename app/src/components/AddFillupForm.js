// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import { DataContext, ModalContext } from "./contexts";

function AddFillupForm(props) {
  return (
    <DataContext.Consumer>
      {({ fillupDispatch }) => (
        <ModalContext.Consumer>
          {({ modalDispatch }) => (
            <form
              action="#"
              method="post"
              onSubmit={(event) => {
                fillupDispatch({ type: "add_fillup", event: event });
                modalDispatch({ type: 'hide' });
              }}
            >
              <p>
                <label htmlFor="id_distance">Distance driven:</label>
                <input
                  type="number"
                  name="distance"
                  step="0.1"
                  required=""
                  id="id_distance"
                />
              </p>
              <p>
                <label htmlFor="id_litres">Litres:</label>
                <input
                  type="number"
                  name="litres"
                  step="0.01"
                  required=""
                  id="id_litres"
                />
              </p>
              <p>
                <label htmlFor="id_total_price">Total price:</label>
                <input
                  type="number"
                  name="total_price"
                  step="0.01"
                  required=""
                  id="id_total_price"
                />
              </p>
              <input
                type="hidden"
                name="vehicle_id"
                value={props.vehicle_id}
              />
              <input type="submit" value="Add Refueling Expense" />
            </form>
          )}
        </ModalContext.Consumer>
      )}
    </DataContext.Consumer>
  );
}

export default AddFillupForm;
