// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import { roundToPrecision } from "./helpers";

function SingleVehicleStats({ fillups }) {
  let { sums, averages } = calculate(fillups);
  return (
    <div className="grid" id="single-vehicle-stats">
      <div id="single-vehicle-totals">
        <h4>Total:</h4>
        <ul>
          <li>{roundToPrecision(sums.litres, 1)} litres</li>
          <li>{roundToPrecision(sums.cost, 1)} € </li>
          <li>{roundToPrecision(sums.distance, 1)} km</li>
        </ul>
      </div>
      <div id="single-vehicle-averages">
        <h4>Average:</h4>
        <ul>
          <li>{roundToPrecision(averages.cost, 1)} € / 100km</li>
          <li>{roundToPrecision(averages.litres, 1)} l / 100km</li>
        </ul>
      </div>
    </div>
  );
}

function calculate(fillups) {
  let sums = {
    litres: 0,
    cost: 0,
    distance: 0,
  };
  let averages = {
    litres: 0,
    cost: 0,
  };

  let { litres, cost, distance } = sumFillups(fillups);
  sums.litres = litres;
  sums.cost = cost;
  sums.distance = distance;

  if (sums.distance > 0) {
    averages.litres = (sums.litres / sums.distance) * 100;
    averages.cost = (sums.cost / sums.distance) * 100;
  }

  return { sums, averages };
}

function sumFillups(fillups) {
  let litres = 0;
  let cost = 0;
  let distance = 0;

  fillups.forEach((fillup) => {
    litres += fillup.litres;
    distance += fillup.distance_driven;
    cost += fillup.total_price;
  });

  return { litres, cost, distance };
}

export default SingleVehicleStats;
