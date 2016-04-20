import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component {
  average(data) {
    return _.round(_.sum(data)/data.length);
  }

  render() {
    return(
      <div>
        <Sparklines heigth={120} width={180} data={this.props.dataTemps}  margin={5}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(this.props.dataTemps)} {this.props.units}</div>
      </div>
    );
  }
}

export default Chart;
