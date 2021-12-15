// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

export function modalReducer(state, action) {
  switch (action.type) {
    case 'show':
      return ({
        ...state,
        modalVisibility: true,
        title: action.title,
        content: action.content,
      });
    case 'hide':
      return ({
        ...state,
        modalVisibility: false,
      });
    default:
      throw new Error();
  }
}

export function vehicleReducer(state, action) {
  switch (action.type) {
    case 'add_fillup':
      action.event.preventDefault();
      let vehicle_key = action.event.target.elements.vehicle_key.value;

      let fillup = {
        "distance_driven": parseFloat(action.event.target.elements.distance.value),
        "total_price": parseFloat(action.event.target.elements.total_price.value),
        "litres": parseFloat(action.event.target.elements.litres.value),
      };

      let vehicle = {
        'name': state.vehicles[vehicle_key].name,
        'register_number': state.vehicles[vehicle_key].register_number,
        'fillups': [
          ...state.vehicles[vehicle_key].fillups,
          fillup,
        ],
      };

      let vehicles = [...state.vehicles];
      vehicles[vehicle_key] = vehicle;

      return ({
        ...state,
        vehicles: vehicles
      });
    default:
      throw new Error();
  }
}
