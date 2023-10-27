import React from "react";
import "./Categories.css";

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


// import $ from "jquery";

function Categories() {


   



  return (
    <div>
        <div className="container-fluid mt-4">
            <div className="container">

                <div className="header row">
                    <div className="heading col-md-3">
                        Featured Categories
                    </div>
                    <div className="menu col-md-4">
                        <ul className='d-flex justify-content-between pt-3'>
                            <li> Cake & Milk </li>
                            <li> Coffees & Teas </li>
                            <li> Pet Foods </li>
                            <li> Vegetables </li>
                        </ul>
                    </div>
                    <div className="btns col-md-5">
                        <button> <ArrowBackIcon/> </button>
                        <button> <ArrowForwardIcon/> </button>
                    </div>
                </div>

                <div className="categories row mb-5">
                    <div className="all_cards">

                        <div className="card" style={{background: "#81ecec"}}>
                            <img src="https://pngfre.com/wp-content/uploads/apple-53-1024x762.png" alt="Apple Image" />
                            <div className="name"> Red Apple </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#55efc4"}}>
                            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7771642/snacks-clipart-md.png" alt="Snack Image" />
                            <div className="name"> Snack </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#74b9ff"}}>
                            <img src="https://www.transparentpng.com/thumb/vegetable/fZslFj-vegetable-cabbage-transparent.png" alt="Vegetables Image" />
                            <div className="name"> Vegetables </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#a29bfe"}}>
                            <img src="https://freepngimg.com/save/19213-strawberry-download-png/1920x1200" alt="Strawberry Image" />
                            <div className="name"> Strawberry </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#ffeaa7"}}>
                            <img src="https://png.pngtree.com/png-clipart/20220125/original/pngtree-a-plate-of-black-plum-fruits-png-image_7208256.png" alt="Black Plum Image" />
                            <div className="name"> Black Plum </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#fab1a0"}}>
                            <img src="https://static.vecteezy.com/system/resources/previews/029/333/647/original/custard-apple-transparent-background-png.png" alt="Custard Apple Image" />
                            <div className="name"> Custard Apple </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#b2bec3"}}>
                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/12/KN/WR/KO/91277325/aashif-chips-foil-pack-mockup-both-sides2418.png" alt="Coffee & Tea Image" />
                            <div className="name"> Coffee & Tea </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#badc58"}}>
                            <img src="https://i.pinimg.com/originals/39/d3/54/39d3547814602c93ad801b4405a8f365.png" alt="Headphone Image" />
                            <div className="name"> Headphone </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#7ed6df"}}>
                            <img src="https://freepngimg.com/thumb/cake/158917-cake-chocolate-png-free-photo.png" alt="Cake & Milk Image" />
                            <div className="name"> Cake & Milk </div>
                            <div className="stock"> 26 items </div>
                        </div>

                        <div className="card" style={{background: "#c7ecee"}}>
                            <img src="https://freepngimg.com/save/16243-kiwi-transparent/750x500" alt="Oganic Kiwi Image" />
                            <div className="name"> Oganic Kiwi </div>
                            <div className="stock"> 26 items </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Categories;
