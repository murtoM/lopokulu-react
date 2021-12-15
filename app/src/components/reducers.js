// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

export function modalReducer(state, action) {
  switch (action.type) {
    case "show":
      return {
        ...state,
        modalVisibility: true,
        title: action.title,
        content: action.content,
      };
    case "hide":
      return {
        ...state,
        modalVisibility: false,
      };
    default:
      throw new Error();
  }
}

export function fillupReducer(state, action) {
  switch (action.type) {
    case "add_fillup":
      action.event.preventDefault();

      let fillup = {
        vehicle_id: action.event.target.elements.vehicle_id.value,
        distance_driven: parseFloat(
          action.event.target.elements.distance.value
        ),
        total_price: parseFloat(action.event.target.elements.total_price.value),
        litres: parseFloat(action.event.target.elements.litres.value),
      };

      return [...state, fillup];
    default:
      throw new Error();
  }
}

export function vehicleReducer(state, action) {
  switch (action.type) {
    case "add":
      action.event.preventDefault();
      let vehicle = {
        id: state.length.toString(),
        name: action.event.target.elements.name.value,
        register_number: action.event.target.elements.register_number.value,
      };

      return [...state, vehicle];

    default:
      throw new Error();
  }
}
