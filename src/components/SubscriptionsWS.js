import { gql } from 'apollo-boost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSubscription } from '@apollo/react-hooks'

import { selectors } from '../store/reducers'
import {
    metrics as metricActions,
    charts as chartsActions
} from '../store/actions/index'

const SUBSCRIPTION = gql`
    subscription {
        newMeasurement {
            at
            metric
            unit
            value
        }
    }
`

export default function SubscriptionWS() {
    const data = useSelector(selectors.charts.getChartsData)
    const dispatch = useDispatch()
    const { data: { newMeasurement } = {}, loading } = useSubscription(
        SUBSCRIPTION
    )

    useEffect(() => {
        return function() {
            if (!newMeasurement) {
                return
            }

            const metrics = Object.keys(data)

            if (metrics.length && metrics.includes(newMeasurement.metric)) {
                dispatch(chartsActions.updateData(newMeasurement))
            }
        }
    })

    if (!loading) {
        dispatch(metricActions.newMetrics(newMeasurement))
    }
    return ''
}
