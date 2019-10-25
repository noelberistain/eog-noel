import React from 'react'
import { createClient, Provider } from 'urql'
import Metrics from './Metrics'
import { url } from './url'

const client = createClient(url)

export default () => {
    return (
        <Provider value={client}>
            <Metrics />
        </Provider>
    )
}
