// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import FillupTable from "./FillupTable";
import AddFillupForm from './AddFillupForm';
import SingleVehicleStats from "./SingleVehicleStats";
import { ModalContext } from "./contexts";

function Vehicle(props) {
  return (
    <article>
      <header>
        <nav>
          <ul>
            <li>
              <strong>
                ({props.register_number}) {props.name}
              </strong>
            </li>
          </ul>
          <ul>
            <li>
              <ModalContext.Consumer>
                {({modalState, modalDispatch}) => (
                  <button
                    onClick={() => modalDispatch({
                      type: 'show',
                      title: props.register_number,
                      content: <AddFillupForm register_number={props.register_number} />
                    })}
                  >
                    Add Refueling Expense
                  </button>
                )}
              </ModalContext.Consumer>
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
