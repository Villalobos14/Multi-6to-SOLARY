// 'use client';
import {
    LineChart,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  const data = [
    {
      date: 'Aug 01',
      'ETF Shares Vital': 2100.2,
      'Vitainvest Core': 4434.1,
      'iShares Tech Growth': 7943.2,
    },
  ];
  
  export default function Example() {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-4">Daily Price Data</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <LineChart
              data={data}
              index="date"
              categories={['ETF Shares Vital', 'Vitainvest Core', 'iShares Tech Growth']}
              colors={['amber', 'red', 'purple']}
              valueFormatter={(value) => `${value.toLocaleString('en-US')} USD`}
              className="h-96"
            />
          </div>
        </div>
      </div>
    );
  }
  