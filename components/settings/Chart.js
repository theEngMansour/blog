import React from 'react';
import { useIntl } from 'react-intl';
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



export default function Chart({item}) {
  const { formatMessage } = useIntl()
  
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
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: formatMessage({id: 'my.posts'}),
        data: [item?.posts, 1 * item?.posts, 2 * item?.posts, 4 * item?.posts],
        backgroundColor: "#95A3B8",
        borderColor: "#95A3B8",
        fill: false,
        lineTension: 0,
        radius: 5
      },
      {
        label: formatMessage({id: 'comments'}),
        data: [item?.comments, 2 * item?.comments, 2 * item?.comments, 3 * item?.comments],
        backgroundColor: "#36D398",
        borderColor: "#36D398",
        fill: false,
        lineTension: 0,
        radius: 5
      },
      {
        label: formatMessage({id: 'likes'}),
        data: [item?.likes,  3 * item?.likes, 2 * item?.likes, 2 * item?.likes],
        backgroundColor: "#FCBF28",
        borderColor: "#FCBF28",
        fill: false,
        lineTension: 0,
        radius: 5
      },
      {
        label:  formatMessage({id: 'drawer.tags'}),
        data: [item?.tags, 4 *  item?.tags, 2 * item?.tags, 1 * item?.tags],
        backgroundColor: "#ef4444",
        borderColor: "#ef4444",
        fill: false,
        lineTension: 0,
        radius: 5
      }
    ]
  };

  //options
  const options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Line Graph",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    }
  };

  return (
    <React.Fragment>
        <div className="container px-4 mx-auto">
            <div className="w-full h-full mt-4">
                <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none m-0 p-3 sm:p-8">
                    <Line
                        data={data}
                        width={200}
                        height={100}
                        options={options}
                    />
                </div>
            </div>
        </div>      
    </React.Fragment>
  );
}