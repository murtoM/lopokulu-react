// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import { ModalContext } from './contexts';
import { VehicleForm } from './VehicleForm';

function VehicleAdditionButton() {
  return (
    <ModalContext.Consumer>
      {({modalState, modalDispatch}) => (
        <button
          onClick={() => modalDispatch({
            type: 'show',
            title: 'Add a new vehicle',
            content: <VehicleForm />
          })}
        >
          Add a new vehicle
        </button>
      )}
    </ModalContext.Consumer>
  );
}

export default VehicleAdditionButton;
