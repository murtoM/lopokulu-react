// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import FillupRow from './FillupRow';

function FillupTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Litres</th>
          <th>Distance driven</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
      {props.fillups.map((fillup, i) => (
        <FillupRow
          key={i}
          fillup={fillup}
        />
      ))}
      </tbody>
    </table>
  );
}

export default FillupTable;
