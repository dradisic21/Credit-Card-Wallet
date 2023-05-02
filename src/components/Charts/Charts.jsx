import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['Transport', 'Shopping', 'Utilities'],
    datasets: [
      {
        label: 'Expenses',
        data: [45.5, 30.2, 24.3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'Expenses',
      fontSize: 20
    },
    legend: {
      display: true,
      position: 'right'
    }
  };

export function Charts() {

    return(
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}