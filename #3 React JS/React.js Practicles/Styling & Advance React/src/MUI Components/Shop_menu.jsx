import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Shop_menu() {

    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
      setAge(e.target.value);
    };

  return (
    <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label"> Shop </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Shop"
        >
          <MenuItem value="">
            <em>Select Shop</em>
          </MenuItem>
          <MenuItem value={10}> Shop 1 </MenuItem>
          <MenuItem value={20}> Shop 2 </MenuItem>
          <MenuItem value={30}> Shop 3 </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default Shop_menu