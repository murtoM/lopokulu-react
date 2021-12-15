// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";

export const DataContext = React.createContext();

export const initialModalState = {
  modalVisibility: false,
  title: "Modal",
  content: "Modal content",
}

export const ModalContext = React.createContext(initialModalState);
