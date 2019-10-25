import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//Components
import ContainerMetrics from '../metrics/ContainerMetrics'
import Cards from '../cards/Cards'
import Chart from '../charts/Chart'
import SuscriptionWS from '../SubscriptionsWS'
//Styles
import contStyle from './containerStyle'
import cardStyle from './cardStyles'
const useStyles = makeStyles(contStyle, cardStyle)

export default function Content() {
    const { root } = useStyles()
    return (
        <div>
            <div className={root}>
                <ContainerMetrics />
                <SuscriptionWS />
                <Cards style={cardStyle} />
            </div>
            <Chart />
        </div>
    )
}
