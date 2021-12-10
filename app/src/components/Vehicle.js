// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import FillupTable from "./FillupTable";
import SingleVehicleStats from "./SingleVehicleStats";

function Vehicle(props) {
  return (
    <article>
      <header>
        <nav>
          <ul>
            <li>
              <strong>({props.register_number}) {props.name}</strong>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" role="button">
                Add Refueling Expense
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <SingleVehicleStats fillups={props.fillups} />
        <FillupTable fillups={props.fillups} />
      </main>
    </article>
  );
}

export default Vehicle;
