export default (metrics, data) => {
    const series = []
    const units = []

    for (let metric of metrics) {
        const values = data[metric]
        const value = values[0]
        units.push(value.unit)
        series.push({
            name: value.metric,
            data: values.map(val => [new Date(val.at), val.value])
        })
    }

    return { series, units }
}
