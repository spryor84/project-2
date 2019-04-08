import React, { Component } from 'react';
import * as d3 from 'd3';

class TheMightyDucks extends Component {
  render () {
    let margin = {top: 20, right: 20, bottom: 20, left: 20}
    let width = 500;
    let height = 500;
    let radius = width/2;

    let arc = d3.arc()
      .outterRadius(radius - 10)
      .innerRadius(0);
    let pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.count; });

    let svg = d3.select()

    return (
      <div className='data'>
      {this.props.full.democratic.yes}
      {this.props.full.republican.yes}
      {this.props.full.independent.yes}
      </div>
    )
  }
}

export default TheMightyDucks


