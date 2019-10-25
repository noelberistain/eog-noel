import React from 'react'
import { useSelector } from 'react-redux'
import Highcharts from 'highcharts'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import HighchartsReact from 'highcharts-react-official'

import { selectors } from '../../store/reducers'

import cardChartStyle from './cardChartStyle'
import chartOptions from './chartOptions'
import settingData from './settingData'
import highChartOptions from './highChartOptions'

const useStyles = makeStyles(cardChartStyle)

export default () => {
    const data = useSelector(selectors.charts.getChartsData)
    const { card, chartStyle } = useStyles()
    const metrics = Object.keys(data)

    const { series, units } = settingData(metrics, data)
    const { options } = highChartOptions(chartOptions, series, units)

    return (
        <>
            {metrics.length > 0 && (
                <Card className={card}>
                    <CardContent>
                        <HighchartsReact
                            className={chartStyle}
                            highcharts={Highcharts}
                            options={options}
                        />
                    </CardContent>
                </Card>
            )}
        </>
    )
}
