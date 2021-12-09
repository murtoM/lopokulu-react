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

    return (
      <>
        <div className='grid' id='totals'>
          <TotalsCard title='litres' value='N/A' />
          <TotalsCard title='€' value='N/A' />
          <TotalsCard title='km' value='N/A' />
          <TotalsCard title='€ / 100 km' value='N/A' theme='avg' />
          <TotalsCard title='l / 100 km' value='N/A' theme='avg' />
        </div>
      </>
    );
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
