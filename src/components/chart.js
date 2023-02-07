import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({coin}) => {
  return (
    <Sparklines svgWidth={140} svgHeight={40} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
    </Sparklines>
  )
}

export default Chart