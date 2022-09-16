import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    ChartOptions
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
};

export default function Chart() {
  return (
    <React.Fragment>
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {/* Start */}
                    <div className="w-full h-80 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <Line
                                data={data}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </React.Fragment>
  );
}