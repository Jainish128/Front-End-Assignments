import React from 'react'
// import Select_Menu from '../MUI Components/Select_Menu'
import All_Categories from '../MUI Components/All_Categories'

// Icons
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Shop_menu from '../MUI Components/Shop_menu';

// Select Menu imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Bottom_Header() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };


  return (
    <div>
        <div className="container-fluid border border-bottom-1 bg-light">
            <div className="container">
                <div className="row">

                  <div className="col-md-2">
                    <All_Categories/>
                  </div>

                  <div className="col-md-8 d-flex">

                    {/* <div className="col-md-1 pt-3">
                      <WhatshotIcon color="action" /> Hot Deals
                    </div> */}
                    <div className="col-md-10 pt-3 d-flex justify-content-between">
                      <div className="col-md-2">
                        <WhatshotIcon color="action" /> Hot Deals
                      </div>
                      <div className='col-md-1'>
                        Home
                      </div>
                      <div className='col-md-1'>
                        About 
                      </div> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className='col-md-1'>
                      <FormControl variant="standard" sx={{ m: -2, minWidth: 60 }}>
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
                      </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className='col-md-1'>
                      <FormControl variant="standard" sx={{ m: -2, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-standard-label"> Vendors </InputLabel>
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
                          <MenuItem value={10}> Vendor 1 </MenuItem>
                          <MenuItem value={20}> Vendor 2 </MenuItem>
                          <MenuItem value={30}> Vendor 3 </MenuItem>
                          </Select>
                        </FormControl>
                      </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className='col-md-2'>
                      <FormControl variant="standard" sx={{ m: -2, minWidth: 110 }}>
                        <InputLabel id="demo-simple-select-standard-label"> Mega Menu </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Shop"
                          >
                          <MenuItem value="">
                            <em>Select Mega Menu</em>
                          </MenuItem>
                          <MenuItem value={10}> Mega Menu 1 </MenuItem>
                          <MenuItem value={20}> Mega Menu 2 </MenuItem>
                          <MenuItem value={30}> Mega Menu 3 </MenuItem>
                          </Select>
                        </FormControl>
                      </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className='col-md-1'>
                      <FormControl variant="standard" sx={{ m: -2, minWidth: 55 }}>
                        <InputLabel id="demo-simple-select-standard-label"> Blog </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Shop"
                          >
                          <MenuItem value="">
                            <em>Select Blog</em>
                          </MenuItem>
                          <MenuItem value={10}> Blog 1 </MenuItem>
                          <MenuItem value={20}> Blog 2 </MenuItem>
                          <MenuItem value={30}> Blog 3 </MenuItem>
                          </Select>
                        </FormControl>
                      </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className='col-md-1'>
                      <FormControl variant="standard" sx={{ m: -2, minWidth: 65 }}>
                        <InputLabel id="demo-simple-select-standard-label"> Pages </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Shop"
                          >
                          <MenuItem value="">
                            <em>Select Page</em>
                          </MenuItem>
                          <MenuItem value={10}> Page 1 </MenuItem>
                          <MenuItem value={20}> Page 2 </MenuItem>
                          <MenuItem value={30}> Page 3 </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className='col-md-1'>
                        Contact
                      </div>
                    </div>

                  </div>

                  <div className="col-md-2 pt-2 ps-5">
                    <h2 style={{color: "#1abc9c"}}> 1900-888 </h2>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom_Header