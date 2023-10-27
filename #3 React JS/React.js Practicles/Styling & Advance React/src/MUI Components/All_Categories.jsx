import React from 'react'

// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Select from '@mui/material/Select';
// import { SelectChangeEvent } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';


function All_Categories() {

    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 200, background:"#1abc9c" }} size="small">
      <InputLabel id="demo-select-small-label" style={{fontSize: "13px", color: "white"}}> 
        <GridViewIcon color="action" style={{fontSize: "18px", color: "white"}} />   Browse All Categories
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em> Select Category </em>
        </MenuItem>
        <MenuItem value={10}> Fruits </MenuItem>
        <MenuItem value={20}> Vegetables </MenuItem>
        <MenuItem value={30}> Snecks </MenuItem>
        <MenuItem value={40}> Grossary </MenuItem>
      </Select>
    </FormControl>
    </div>
  )
}

export default All_Categories