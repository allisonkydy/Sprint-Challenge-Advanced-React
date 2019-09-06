import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Graph = ({ players }) => {
  return (
    <BarChart
      width={1200}
      height={300}
      data={players}
      className="graph"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="searches" fill="#200d61" />
    </BarChart>
  )
}

export default Graph;
