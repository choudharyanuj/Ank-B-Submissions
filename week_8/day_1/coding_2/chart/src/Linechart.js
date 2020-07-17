import React, { Component } from 'react'
import Style from './Demo.module.css'
import { Line } from 'react-chartjs-2';

const mychart ={
    labels:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
        {
            label:'stock chart',
            fill: true,
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
            pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:[101,105,108,103,102,106,104,109,107,105,100, 99, 102, 102.5,108,106,100,98,95,93,89,95,78,101,105,106,70,89,90,96],
        }
        
    ]
};

export default class Linechart extends Component {
    render() {
        return (
            <div className={Style.font}>
                <h1>TATA Stock price</h1>
                <Line ref="chart" data={mychart} />
            </div>
        )
    }
}
