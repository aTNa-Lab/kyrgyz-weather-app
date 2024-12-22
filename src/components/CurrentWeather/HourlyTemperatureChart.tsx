import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { HourlyForecastData } from "../../api/types";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import { TempUnit, celciusToFahrenheit } from "../../utils/unitConversion";

// Register Chart.js components and plugins
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface HourlyTemperatureChartProps {
  data: HourlyForecastData[]; // Array of temperature data
  min: number;
  max: number;
}

const HourlyTemperatureChart: React.FC<HourlyTemperatureChartProps> = ({
  data,
  min,
  max,
}) => {
  const { degreeType } = useSelector((state: AppStore) => ({
    degreeType: state.app.tempUnit,
  }));

  const parseData = (data: HourlyForecastData[]) => {
    return data.map((d) => parseTemperature(d.temp));
  };

  const parseTemperature = (value: number) => {
    if (degreeType === TempUnit.FAHRENHEIT) {
      return celciusToFahrenheit(value);
    }

    return value;
  };

  const getDegreeSymbol = () => {
    if (degreeType === TempUnit.FAHRENHEIT) {
      return "°F";
    } else {
      return "°C";
    }
  };

  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: parseData(data),
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line color
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: "start",
        tension: 0.4, // Smooth line
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        align: "top" as const,
        formatter: (value: number) => `${value} ${getDegreeSymbol()}`, // Show temperature value at points
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        min: parseTemperature(min),
        max: parseTemperature(max + 5),
      },
    },
  };

  return <Line style={{ maxHeight: 120 }} data={chartData} options={options} />;
};

export default HourlyTemperatureChart;
