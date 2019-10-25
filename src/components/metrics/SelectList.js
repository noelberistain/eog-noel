import React from 'react'
import { Checkbox, ListItemText, MenuItem, Select } from '@material-ui/core'

const List = ({ metrics, selectedMetrics, setMetricsSelected }) => {
    const List = metrics.map((val, idx) => (
        <MenuItem key={idx} value={val}>
            <Checkbox
                checked={selectedMetrics.indexOf(val) > -1}
                className='checked'
                color='primary'
            />
            <ListItemText primary={val} />
        </MenuItem>
    ))

    return (
        <>
            <Select
                displayEmpty
                multiple={true}
                name='Metric'
                onChange={setMetricsSelected}
                renderValue={() => ''}
                value={selectedMetrics}
            >
                {List}
            </Select>
        </>
    )
}

export default List

// I was trying to create the little div/span button and added to the input/search list menu
// I am losing time still a lot to do

// let style = {
//     color: 'rgb(81, 81, 81)',
//     fontSize: '75%',
//     padding: '3px 3px 3px 6px',
//     display: 'inline-block'
// }
// N O button added/ not as i wish it should looks so
// const value = selected => {
//     let arr = selected.map((item, idx) => (
//         <div key={idx} style={style}>
//             {item + ' '}
//         </div>
//     ))
//     return arr
// S A M E    T H I N G but as strings/separated/by...
//     // let arr = selected.join('/')
//     return
// }
