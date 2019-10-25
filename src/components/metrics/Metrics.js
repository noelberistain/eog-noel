import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, Query } from 'urql'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, LinearProgress } from '@material-ui/core'

import { selectors } from '../../store/reducers'
import { metrics as metricsActions } from '../../store/actions/index'

// import ListMenu from './List'
import menuStyle from './menuStyle'
import List from './SelectList'

const useStyles = makeStyles(menuStyle)

const Metrics = () => {
    const { formControl, metricsLabel } = useStyles()
    const dispatch = useDispatch()
    const metrics = useSelector(selectors.metrics.getMetrics)
    const selectedMetrics = useSelector(selectors.metrics.getSelectedMetrics)
    // Didn't have to use useQuery as I am indeed using the Query component
    // But as i want to use data/error in the useEffect hook
    // I had to use it anyways
    const [result] = useQuery({ query: `{getMetrics}` })
    const { data, error } = result
    const setMetricsSelected = e => {
        dispatch(metricsActions.setMetricsSelected(e.target.value))
    }

    // useEffect cdm cwu
    useEffect(() => {
        if (error) {
            return
        } else if (!data) {
            return
        }
        const { getMetrics } = data
        dispatch(metricsActions.setMetricsReceived(getMetrics))
    }, [dispatch, data, error])

    // Query component from urql
    // receives the query as a prop and fetch
    return (
        <Query query='{getMetrics}'>
            {({ fetching }) =>
                fetching ? (
                    <LinearProgress />
                ) : (
                    <>
                        <FormControl className={formControl}>
                            <InputLabel
                                htmlFor='select-multiple-metrics'
                                className={metricsLabel}
                            >
                                Select&Display
                            </InputLabel>
                            <List
                                metrics={metrics}
                                setMetricsSelected={setMetricsSelected}
                                selectedMetrics={selectedMetrics}
                            />
                        </FormControl>
                    </>
                )
            }
        </Query>
    )
}

export default Metrics

// renderValue={selected => selected.join(', ')}
