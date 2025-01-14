import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', sales: 4000, purchase: 2400 },
    { month: 'Feb', sales: 3000, purchase: 1398 },
    { month: 'Mar', sales: 2000, purchase: 9800 },
    { month: 'Apr', sales: 2780, purchase: 3908 },
    { month: 'May', sales: 1890, purchase: 4800 },
    { month: 'Jun', sales: 2390, purchase: 3800 },
    { month: 'Jul', sales: 3490, purchase: 4300 },
  ];

const BarGraph = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{ top: 20, right:30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey='month'/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='sales' fill='#8884d8' name='Sales' />
            <Bar dataKey='purchase' fill='#82ca9d' name='Purchase' />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarGraph