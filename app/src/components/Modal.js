// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";
import { ModalContext } from "./data-context.js";

export default function Modal() {
  return (
    <ModalContext.Consumer>
      {({ modalVisibility, toggleModalVisibility }) => {
        console.log(modalVisibility);
        if (!modalVisibility) {
          return null;
        }
        return (
          <div className="container" id="modal">
            <article>
              <h1>Hello world, im modal</h1>
            </article>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
