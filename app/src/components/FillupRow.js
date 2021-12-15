// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

function FillupRow(props) {
  return (
    <tr>
      <td>{props.fillup.litres}</td>
      <td>{props.fillup.distance_driven}</td>
      <td>{props.fillup.total_price}</td>
    </tr>
  );
}

export default FillupRow;
