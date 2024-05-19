'use client'

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Fond de teint',
    uv: 2000,
    pv: 1400,
    amt: 1400,
  },
  {
    name: 'Palette ombres à paupières',
    uv: 1800,
    pv: 1000,
    amt: 1200,
  },
  {
    name: 'Rouge à lèvres',
    uv: 2200,
    pv: 1200,
    amt: 1300,
  },
  {
    name: 'Mascara',
    uv: 2500,
    pv: 1600,
    amt: 1900,
  },
  {
    name: 'Crayon eyeliner',
    uv: 1800,
    pv: 1000,
    amt: 1100,
  },
  {
    name: 'Fard à joues',
    uv: 2100,
    pv: 1300,
    amt: 1500,
  },
  {
    name: 'Fixateur de maquillage',
    uv: 2400,
    pv: 1500,
    amt: 1800,
  },
];


const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-different-shapes-z94k6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

