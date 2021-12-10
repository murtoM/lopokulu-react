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

    let {sums, averages} = this.calculate(vehicles);

    return (
      <div className='grid' id='totals'>
        <TotalsCard title='litres' value={sums.litres} />
        <TotalsCard title='€' value={sums.cost} />
        <TotalsCard title='km' value={sums.distance} />
        <TotalsCard
          title='€ / 100 km'
          value={Math.round(averages.cost * 100) / 100} //Round to 2 decimal
          theme='avg'
        />
        <TotalsCard
          title='l / 100 km'
          value={Math.round(averages.litres * 10) / 10} //Round to 1 decimal
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
