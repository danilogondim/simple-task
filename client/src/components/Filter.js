import 'date-fns';
import React from 'react';
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
    if (input <= 23 && input >= 0) {
      if (index === '0' && input < range[1]) {
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '0' && input > range[1]) {
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        newRange.sort((a, b) => a - b)
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '1' && input > range[0]) {
        const newRange = [...range];
        newRange[index] = event.target.value === '' ? '' : input;
        dispatch({ type: SET_RANGE, range: newRange });
      } else if (index === '1' && input < range[0]) {
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
        <h4>Location: </h4>
        <input type='search'></input>
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