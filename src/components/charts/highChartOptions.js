export default (chartOptions, series, units) => {
    let options = {
        ...chartOptions,
        series,
        yAxis: {
            title: {
                text: units.join(', ')
            }
        }
    }
    return { options }
}
