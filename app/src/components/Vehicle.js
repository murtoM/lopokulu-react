// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import FillupTable from './FillupTable';
import SingleVehicleStats from './SingleVehicleStats';

function Vehicle() {
  return (
    <>
      <SingleVehicleStats />
      <FillupTable />
    </>
  );
}

export default Vehicle;
