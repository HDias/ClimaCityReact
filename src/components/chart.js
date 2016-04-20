import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends Component {
  render() {
    return(
      <div>
        <Sparklines heigth={120} width={180} data={this.props.dataTemps}  margin={5}>
          <SparklinesLine color={this.props.color} />
        </Sparklines>
      </div>
    );
  }
}

export default Chart;
