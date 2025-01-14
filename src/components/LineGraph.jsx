import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
    { month: 'Jun', orders: 300, delivered: 100 },
    { month: 'Jul', orders: 250, delivered: 150 },
    { month: 'Aug', orders: 80, delivered: 250 },
    { month: 'Sep', orders: 300, delivered: 250 },
    { month: 'Oct', orders: 400, delivered: 350 },
    { month: 'Nov', orders: 500, delivered: 450 },
    { month: 'Dec', orders: 550, delivered: 300 },
  ];

const LineGraph = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='orders' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='delivered' stroke='#82ca9d'/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default LineGraph