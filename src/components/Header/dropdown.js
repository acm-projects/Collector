import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position:'relative',
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(-1),
    marginTop: theme.spacing(-.7),
    color:'fff',
  },
  select:{
    '&:before': {
        borderColor: '#f4f3ea',
        color: '#f4f3ea'
        
    },
    '&:after': {
        borderColor: '#f4f3ea',
        color: '#f4f3ea'

    },
    
    
  },
  icon: {
    fill: '#f4f3ea',
    color: '#f4f3ea'
},
text:{
    color:'#f4f3ea'
},
root:{
    color:"#f4f3ea"
},
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.text} 
        id="demo-controlled-open-select-label">Category</InputLabel>
        <Select 
          className={classes.select}
          inputProps={{
            classes: {
                icon: classes.icon,
                root: classes.root
            },
        }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.select}value={2}>Products</MenuItem>
          <MenuItem className={classes.select}value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}