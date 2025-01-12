<template>
  <Chart
    type="bar"
    :data="chartData"
    :options="chartOptions"
    class="start-chart"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        data: [540, 345, 702, 502, 550, 285, 702, 540, 325],
        backgroundColor: [
          '#9cfee730',
          'rgba(6, 182, 212, 0.2)',
          'rgb(107, 114, 128, 0.2)',
        ],
        borderColor: ['#9cfee7', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)'],
        borderWidth: 1,
      },
    ],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const surfaceBorder = documentStyle.getPropertyValue('--primary-border-color')

  return {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<style lang="scss">
@use 'index';
</style>
