// SPDX-FileCopyrightText: 2021 Jani Lehtinen
// SPDX-FileCopyrightText: 2021 Markus Ijäs
// SPDX-FileCopyrightText: 2021 Markus Murto
// SPDX-FileCopyrightText: 2021 Susanna Mikola
//
// SPDX-License-Identifier: MIT

import React from "react";
import { ModalContext } from "./contexts";

export default function Modal() {
  return (
    <ModalContext.Consumer>
      {({ modalState, modalDispatch }) => {
        if (!modalState.modalVisibility) {
          return null;
        }
        return (
          <div id="modal">
            <article className="container">
              <header>
                <nav>
                  <ul>
                    <li>
                      <strong>{modalState.title}</strong>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        className="secondary outline"
                        onClick={() =>
                          modalDispatch({
                            type: "hide",
                          })
                        }
                      >
                        ✕
                      </button>
                    </li>
                  </ul>
                </nav>
              </header>
              {modalState.content}
            </article>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
