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
    {
      date: 'Aug 02',
      'ETF Shares Vital': 2943.0,
      'Vitainvest Core': 4954.1,
      'iShares Tech Growth': 8954.1,
    },
    {
      date: 'Aug 03',
      'ETF Shares Vital': 4889.5,
      'Vitainvest Core': 6100.2,
      'iShares Tech Growth': 9123.7,
    },
    {
      date: 'Aug 04',
      'ETF Shares Vital': 3909.8,
      'Vitainvest Core': 4909.7,
      'iShares Tech Growth': 7478.4,
    },
    {
      date: 'Aug 05',
      'ETF Shares Vital': 5778.7,
      'Vitainvest Core': 7103.1,
      'iShares Tech Growth': 9504.3,
    },
    {
      date: 'Aug 06',
      'ETF Shares Vital': 5900.9,
      'Vitainvest Core': 7534.3,
      'iShares Tech Growth': 9943.4,
    },
    {
      date: 'Aug 07',
      'ETF Shares Vital': 4129.4,
      'Vitainvest Core': 7412.1,
      'iShares Tech Growth': 10112.2,
    },
    {
      date: 'Aug 08',
      'ETF Shares Vital': 6021.2,
      'Vitainvest Core': 7834.4,
      'iShares Tech Growth': 10290.2,
    },
    {
      date: 'Aug 09',
      'ETF Shares Vital': 6279.8,
      'Vitainvest Core': 8159.1,
      'iShares Tech Growth': 10349.6,
    },
    {
      date: 'Aug 10',
      'ETF Shares Vital': 6224.5,
      'Vitainvest Core': 8260.6,
      'iShares Tech Growth': 10415.4,
    },
    {
      date: 'Aug 11',
      'ETF Shares Vital': 6380.6,
      'Vitainvest Core': 8965.3,
      'iShares Tech Growth': 10636.3,
    },
    {
      date: 'Aug 12',
      'ETF Shares Vital': 6414.4,
      'Vitainvest Core': 7989.3,
      'iShares Tech Growth': 10900.5,
    },
    {
      date: 'Aug 13',
      'ETF Shares Vital': 6540.1,
      'Vitainvest Core': 7839.6,
      'iShares Tech Growth': 11040.4,
    },
    {
      date: 'Aug 14',
      'ETF Shares Vital': 6634.4,
      'Vitainvest Core': 7343.8,
      'iShares Tech Growth': 11390.5,
    },
    {
      date: 'Aug 15',
      'ETF Shares Vital': 7124.6,
      'Vitainvest Core': 6903.7,
      'iShares Tech Growth': 11423.1,
    },
    {
      date: 'Aug 16',
      'ETF Shares Vital': 7934.5,
      'Vitainvest Core': 6273.6,
      'iShares Tech Growth': 12134.4,
    },
    {
      date: 'Aug 17',
      'ETF Shares Vital': 10287.8,
      'Vitainvest Core': 5900.3,
      'iShares Tech Growth': 12034.4,
    },
    {
      date: 'Aug 18',
      'ETF Shares Vital': 10323.2,
      'Vitainvest Core': 5732.1,
      'iShares Tech Growth': 11011.7,
    },
    {
      date: 'Aug 19',
      'ETF Shares Vital': 10511.4,
      'Vitainvest Core': 5523.1,
      'iShares Tech Growth': 11834.8,
    },
    {
      date: 'Aug 20',
      'ETF Shares Vital': 11043.9,
      'Vitainvest Core': 5422.3,
      'iShares Tech Growth': 12387.1,
    },
    {
      date: 'Aug 21',
      'ETF Shares Vital': 6700.7,
      'Vitainvest Core': 5334.2,
      'iShares Tech Growth': 11032.2,
    },
    {
      date: 'Aug 22',
      'ETF Shares Vital': 6900.8,
      'Vitainvest Core': 4943.4,
      'iShares Tech Growth': 10134.2,
    },
    {
      date: 'Aug 23',
      'ETF Shares Vital': 7934.5,
      'Vitainvest Core': 4812.1,
      'iShares Tech Growth': 9921.2,
    },
    {
      date: 'Aug 24',
      'ETF Shares Vital': 9021.0,
      'Vitainvest Core': 2729.1,
      'iShares Tech Growth': 10549.8,
    },
    {
      date: 'Aug 25',
      'ETF Shares Vital': 9198.2,
      'Vitainvest Core': 2178.0,
      'iShares Tech Growth': 10968.4,
    },
    {
      date: 'Aug 26',
      'ETF Shares Vital': 9557.1,
      'Vitainvest Core': 2158.3,
      'iShares Tech Growth': 11059.1,
    },
    {
      date: 'Aug 27',
      'ETF Shares Vital': 9959.8,
      'Vitainvest Core': 2100.8,
      'iShares Tech Growth': 11903.6,
    },
    {
      date: 'Aug 28',
      'ETF Shares Vital': 10034.6,
      'Vitainvest Core': 2934.4,
      'iShares Tech Growth': 12143.3,
    },
    {
      date: 'Aug 29',
      'ETF Shares Vital': 10243.8,
      'Vitainvest Core': 3223.4,
      'iShares Tech Growth': 12930.1,
    },
    {
      date: 'Aug 30',
      'ETF Shares Vital': 10078.5,
      'Vitainvest Core': 3779.1,
      'iShares Tech Growth': 13420.5,
    },
    {
      date: 'Aug 31',
      'ETF Shares Vital': 11134.6,
      'Vitainvest Core': 4190.3,
      'iShares Tech Growth': 14443.2,
    },
    {
      date: 'Sep 01',
      'ETF Shares Vital': 12347.2,
      'Vitainvest Core': 4839.1,
      'iShares Tech Growth': 14532.1,
    },
    {
      date: 'Sep 02',
      'ETF Shares Vital': 12593.8,
      'Vitainvest Core': 5153.3,
      'iShares Tech Growth': 14283.5,
    },
    {
      date: 'Sep 03',
      'ETF Shares Vital': 12043.4,
      'Vitainvest Core': 5234.8,
      'iShares Tech Growth': 14078.9,
    },
    {
      date: 'Sep 04',
      'ETF Shares Vital': 12144.9,
      'Vitainvest Core': 5478.4,
      'iShares Tech Growth': 13859.7,
    },
    {
      date: 'Sep 05',
      'ETF Shares Vital': 12489.5,
      'Vitainvest Core': 5741.1,
      'iShares Tech Growth': 13539.2,
    },
    {
      date: 'Sep 06',
      'ETF Shares Vital': 12748.7,
      'Vitainvest Core': 6743.9,
      'iShares Tech Growth': 13643.2,
    },
    {
      date: 'Sep 07',
      'ETF Shares Vital': 12933.2,
      'Vitainvest Core': 7832.8,
      'iShares Tech Growth': 14629.2,
    },
    {
      date: 'Sep 08',
      'ETF Shares Vital': 13028.8,
      'Vitainvest Core': 8943.4,
      'iShares Tech Growth': 14230.9,
    },
    {
      date: 'Sep 09',
      'ETF Shares Vital': 12993.2,
      'Vitainvest Core': 9534.4,
      'iShares Tech Growth': 14678.1,
    },
    {
      date: 'Sep 10',
      'ETF Shares Vital': 13078.9,
      'Vitainvest Core': 10134.1,
      'iShares Tech Growth': 14534.2,
    },
    {
      date: 'Sep 11',
      'ETF Shares Vital': 13143.5,
      'Vitainvest Core': 10435.2,
      'iShares Tech Growth': 14632.3,
    },
    {
      date: 'Sep 12',
      'ETF Shares Vital': 13247.8,
      'Vitainvest Core': 10923.4,
      'iShares Tech Growth': 14823.9,
    },
    {
      date: 'Sep 13',
      'ETF Shares Vital': 13432.9,
      'Vitainvest Core': 11034.5,
      'iShares Tech Growth': 14834.3,
    },
    {
      date: 'Sep 14',
      'ETF Shares Vital': 13623.1,
      'Vitainvest Core': 11234.2,
      'iShares Tech Growth': 14859.1,
    },
    {
      date: 'Sep 15',
      'ETF Shares Vital': 13734.4,
      'Vitainvest Core': 11423.3,
      'iShares Tech Growth': 14943.5,
    },
    {
      date: 'Sep 16',
      'ETF Shares Vital': 13845.7,
      'Vitainvest Core': 11534.1,
      'iShares Tech Growth': 14978.3,
    },
    {
      date: 'Sep 17',
      'ETF Shares Vital': 13934.5,
      'Vitainvest Core': 11634.8,
      'iShares Tech Growth': 14989.4,
    },
    {
      date: 'Sep 18',
      'ETF Shares Vital': 14034.3,
      'Vitainvest Core': 11723.4,
      'iShares Tech Growth': 15012.3,
    },
    {
      date: 'Sep 19',
      'ETF Shares Vital': 14123.2,
      'Vitainvest Core': 11834.5,
      'iShares Tech Growth': 15123.1,
    },
    {
      date: 'Sep 20',
      'ETF Shares Vital': 14234.6,
      'Vitainvest Core': 11934.6,
      'iShares Tech Growth': 15234.2,
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
  