import React from 'react'

import { useSelector } from 'react-redux'
import { selectors } from '../../store/reducers'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const nameOf = str =>
    str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())

export default function Cards({ style }) {
    const data = useSelector(selectors.charts.getChartsData)
    const currentData = useSelector(selectors.metrics.getCurrent)

    //Styles were passed from parent as props
    const useStyles = makeStyles(style)
    const { paper, metricName, root } = useStyles()
    const metrics = Object.keys(data)

    if (Object.keys(currentData).length === 0 || metrics.length === 0) {
        return ''
    }
    return (
        <div className={root}>
            {metrics.map((val, idx) => {
                const { metric, value } = currentData[val]
                return metric === undefined ? (
                    <></>
                ) : (
                    <Paper key={idx} className={paper}>
                        <div>
                            <h4 className={metricName}>
                                <b>{nameOf(metric)}</b>
                            </h4>
                            <p>{value}</p>
                        </div>
                    </Paper>
                )
            })}
        </div>
    )
}
