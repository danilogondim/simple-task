import 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Input, Slider, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { SET_DAY, SET_RANGE } from '../reducer/data_reducer';
import "./Filter.scss";


export default function Filter(props) {

  const { dispatch, day, range } = props;

  // date handler
  const handleDateChange = (date) => {
    dispatch({ type: SET_DAY, day: date });
  };

  // range handler
  const handleChange = (event, newValue) => {
    dispatch({ type: SET_RANGE, range: newValue });
  };

  // input handler
  const handleInputChange = (event) => {
    const index = event.target.id;
    const input = Number(event.target.value);
    // check if the input is within the accepted range
    if (input <= 23 && input >= 0) {
      if (index === '0' && input === range[0] + 1 && input === range[1] && input + 1 <= 23) {
        // avoid lowest value overlapping the highest value by making the highest value move as long as it is within the limit
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        newRange['1'] = event.target.value === '' ? '' : input + 1;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '1' && input === range[1] - 1 && input === range[0] && input - 1 >= 0) {
        // avoid highest value overlapping the lowest value by making the lowest value move as long as it is within the limit
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        newRange['0'] = event.target.value === '' ? '' : input - 1;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '0' && input < range[1]) {
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '0' && input > range[1]) {
        // if the new input set for the lowest value is higher than the highest value, interchange them
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        newRange.sort((a, b) => a - b)
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '1' && input > range[0]) {
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '1' && input < range[0]) {
        // if the new input set for the highest value is lower than the lowest value, interchange them
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        newRange.sort((a, b) => a - b)
        dispatch({ type: SET_RANGE, range: newRange });
      }
    }
  };

  return (
    <section className="filter">
      <div>
        <h4>Would you like to search by location?</h4>
        <h4>Try our <Link to='/search'>map search</Link>.</h4>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            minDate={new Date()}
            minDateMessage="Please select a future date"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={day}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div className="time">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccessTimeIcon />
          </Grid>
          <Typography id="range-slider" gutterBottom>
            Time
          </Typography>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Input
              id={"0"}
              className="input"
              value={range[0]}
              margin="dense"
              onChange={handleInputChange}
              inputProps={{
                step: 1,
                min: 0,
                max: 23,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={range}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={23}
            />
          </Grid>
          <Grid item>
            <Input
              id={"1"}
              className="input"
              value={range[1]}
              margin="dense"
              onChange={handleInputChange}
              inputProps={{
                step: 1,
                min: 0,
                max: 23,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>



    </section>
  )
};