import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Second() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(res.data);
        setData(res.data);
    }



  return (
    <div>

        <div className="container">

        {/* <button className="btn btn-primary" type="button"> */}
            {/* <span className="spinner-grow spinner-grow-sm text-light" aria-hidden="true" /> */}
            {/* <span role="status" className='text-light'> Loading... </span> */}
        {/* </button> */}

            {/* <span className="spinner-grow spinner-grow-sm text-danger" aria-hidden="true" /> */}

            <div className="row">
                {
                    data.map((value, index) => {
                        return (
                            <div value={index} className="col-md-3">
                                <div className="card" style={{width: '100%'}}>
                                    <img src={value.url} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title"> {value.title} </h5>
                                        <p className="card-text"> {value.thumbnailUrl} </p>
                                        <a href="#" className="btn btn-primary"> Add to Cart </a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default Second