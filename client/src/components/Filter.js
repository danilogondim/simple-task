import 'date-fns';
import React, { useState } from 'react';
import { Grid, Input, Slider, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { SET_DAY, SET_RANGE } from '../reducer/data_reducer';


const useStyles = makeStyles({
  root: {
    width: 800,
  },
  input: {
    width: 42,
  },
});

export default function Filter(props) {
  const classes = useStyles();

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
    const index = event.target.name === "start" ? 0 : 1;
    const newRange = [...range];
    newRange[index] = event.target.value === '' ? '' : Number(event.target.value);
    dispatch({ type: SET_RANGE, range: newRange });
  };

  // when the input lose focus, the values are validated
  const handleBlur = (event) => {
    const index = event.target.name === "start" ? 0 : 1;
    if (range[index] < 0) {
      const newRange = [...range];
      newRange[index] = 0;
      dispatch({ type: SET_RANGE, range: newRange });
    } else if (range[index] > 23) {
      const newRange = [...range];
      newRange[index] = 23;
      dispatch({ type: SET_RANGE, range: newRange });
    }
  };

  return (
    <section className="filter" style={{ display: 'flex' }}>
      <h4>Location: </h4>
      <input type='search'></input>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
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
      <div className={classes.root}>
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
              name="start"
              className={classes.input}
              value={range[0]}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
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
              name="end"
              className={classes.input}
              value={range[1]}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
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