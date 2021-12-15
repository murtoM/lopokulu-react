// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from 'react';
import {FillupDataContext} from './contexts';
import {roundToPrecision} from './helpers';

class GlobalStats extends React.Component {
  static contextType = FillupDataContext;

  render() {
    let {vehicleState} = this.context;

    let {sums, averages} = this.calculate(vehicleState.vehicles);

    return (
      <div className='grid' id='totals'>
        <TotalsCard title='litres' value={roundToPrecision(sums.litres, 1)} />
        <TotalsCard title='€' value={roundToPrecision(sums.cost, 2)} />
        <TotalsCard title='km' value={roundToPrecision(sums.distance, 1)} />
        <TotalsCard
          title='€ / 100 km'
          value={roundToPrecision(averages.cost, 2)}
          theme='avg'
        />
        <TotalsCard
          title='l / 100 km'
          value={roundToPrecision(averages.litres, 1)}
          theme='avg'
        />
      </div>
    );
  }

  calculate(allVehicles) {
    let sums = {
      litres: 0,
      cost: 0,
      distance: 0,
    }
    let averages = {
      litres: 0,
      cost: 0,
    }

    allVehicles.forEach((vehicle) => {
      let {litres, cost, distance} = this.sumFillups(vehicle.fillups);
      sums.litres += litres;
      sums.cost += cost;
      sums.distance += distance;
    });

    if (sums.distance > 0) {
      averages.litres = sums.litres / sums.distance * 100;
      averages.cost = sums.cost / sums.distance * 100;
    }

    return {sums, averages};
  }

  sumFillups(allFillups) {
    let litres = 0;
    let cost = 0;
    let distance = 0;

    allFillups.forEach((fillup) => {
      litres += fillup.litres;
      distance += fillup.distance_driven;
      cost += fillup.total_price;
    });

    return {litres, cost, distance};
  }
}

function TotalsCard(props) {
  return (
    <article className={props.theme}>
      <p>{props.value}</p>
      <p>{props.title}</p>
    </article>
  );
}

export default GlobalStats;
