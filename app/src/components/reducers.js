// SPDX-FileCopyrightText: 2021 Hannu Santti
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
