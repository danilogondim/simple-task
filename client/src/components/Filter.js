import 'date-fns';
import React, { useState } from 'react';
import { Grid, Input, Slider, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles({
  root: {
    width: 800,
  },
  input: {
    width: 42,
  },
});

export default function Filter(props) {

  // data state and handler
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // range state and handler
  const classes = useStyles();
  const [value, setValue] = useState([0, 23]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // input handler
  const handleInputChange = (event) => {
    const index = event.target.name === "start" ? 0 : 1;
    setValue(prev => {
      const newArr = [...prev];
      newArr[index] = event.target.value === '' ? '' : Number(event.target.value);
      return newArr
    });
  };
  const handleBlur = (event) => {
    const index = event.target.name === "start" ? 0 : 1;
    if (value[index] < 0) {
      setValue(prev => {
        const newArr = [...prev];
        newArr[index] = 0;
        return newArr
      });
    } else if (value[index] > 23) {
      setValue(prev => {
        const newArr = [...prev];
        newArr[index] = 23;
        return newArr
      });
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
            value={selectedDate}
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
              value={value[0]}
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
              value={value}
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
              value={value[1]}
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