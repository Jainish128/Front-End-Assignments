import React from 'react'

// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Select from '@mui/material/Select';
// import { SelectChangeEvent } from '@mui/material';

function Select_Menu() {

    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label"> Your Location </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em> Select Your Location </em>
        </MenuItem>
        <MenuItem value={10}> Ahmedabad </MenuItem>
        <MenuItem value={20}> Surat </MenuItem>
        <MenuItem value={30}> Kutch </MenuItem>
        <MenuItem value={40}> Rajkot </MenuItem>
      </Select>
    </FormControl>
    </div>
  )
}

export default Select_Menu