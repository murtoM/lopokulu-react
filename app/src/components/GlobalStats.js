// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { FillupDataContext } from './data-context';

class GlobalStats extends React.Component {
  static contextType = FillupDataContext;

  render() {
    let {vehicles} = this.context;

    return (
      <p>{vehicles[0].name}</p>
    );
  }
}

export default GlobalStats;
