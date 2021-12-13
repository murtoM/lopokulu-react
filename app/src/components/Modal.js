// SPDX-FileCopyrightText: 2021 Hannu Santti
// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";
import { ModalContext } from "./data-context.js";

export default function Modal(props) {
  return (
    <ModalContext.Consumer>
      {({ modalVisibility, hideModal, content, title }) => {
        if (!modalVisibility) {
          return null;
        }
        return (
          <div id="modal">
            <article className="container">
              <header>
                <nav>
                  <ul>
                    <li>
                      <strong>{title}</strong>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        className="secondary outline"
                        onClick={hideModal}
                      >
                        ✕
                      </button>
                    </li>
                  </ul>
                </nav>
              </header>
              {content}
            </article>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
