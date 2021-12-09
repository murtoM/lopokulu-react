// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from 'react';
import VehicleList from './VehicleList';
import GlobalStats from './GlobalStats';
import vehicles from '../vehicle-data.json';
import { FillupDataContext } from './data-context';

class App extends React.Component {
  render() {
    return (
      <FillupDataContext.Provider value={vehicles}>
        <GlobalStats />
        <VehicleList />
      </FillupDataContext.Provider>
    );
  }
}

export default App;
