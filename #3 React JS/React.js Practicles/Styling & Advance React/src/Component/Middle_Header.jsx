import React from 'react'
import './Middle_Header.css'
import Select_Menu from '../MUI Components/Select_Menu'

import Badge from '@mui/material/Badge';
// Icons
import MailIcon from '@mui/icons-material/Mail';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RecyclingIcon from '@mui/icons-material/Recycling';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';



function Middle_Header() {

  
  


  return (

    <div>

      <div className="container-fluid bg-light border border-bottom-0">
        <div className="container">
          
          <div className="row">

            <div className="col-md-2 pt-3 pb-2">
              <h1> NEST </h1>
            </div>

            <div className="col-md-5">
              <div className="searchbox col-md-12 d-flex">
                <div className="all_cate col-md-3 ps-2"> 
                  All Categories
                 </div>
                 <div className="col-md-9">
                    <input type="search" className='search_bar' placeholder='Search' />
                 </div>
              </div>
            </div>

            <div className="col-md-5 d-flex">
              <div className="col-md-4" style={{marginTop: "12px"}}>
              <Select_Menu/>
              </div>
              <div className="col-md-2 mt-4 pt-1 me-3 d-flex">
                <Badge badgeContent={1} color="success">
                  <RecyclingIcon color="action" /> 
                </Badge> Compare
              </div>
              <div className="col-md-2 mt-4 pt-1 me-3 d-flex">
                <Badge badgeContent={1} color="success">
                  <FavoriteBorderIcon color="action" /> 
                </Badge> Wishlist
              </div>
              <div className="col-md-2 mt-4 pt-1  d-flex">
                <Badge badgeContent={1} color="success">
                  <ShoppingCartIcon color="action" /> 
                </Badge> Cart
              </div>
              <div className="col-md-2 mt-4 pt-1 d-flex">
                  <Person2Icon color="action" /> 
                  Account
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

  )
}

export default Middle_Header