import React, { useState } from 'react';
import './Search_Data_from_Table.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function Search_Data_from_Table() {


    const data = [
        {
            id: 1,
            name: "HP Pavallion",
            price: 60000,
            category: "Laptop"
        },
        {
            id: 2,
            name: "Realme 6",
            price: 16000,
            category: "Smart Phone"
        },
        {
            id: 3,
            name: "Ninja Calling Pro",
            price: 2000,
            category: "Smart Watch"
        },
        {
            id: 4,
            name: "Ear Buds",
            price: 999,
            category: "Noise"
        },
        {
            id: 5,
            name: "Trekking Beg",
            price: 10000,
            category: "JP Empire"
        }
    ];


        const [searchTerm, setSearchTerm] = useState('');
        const [filteredData, setFilteredData] = useState(data);

        const handleSearch = (event) => {
            const term = event.target.value;
            setSearchTerm(term);
            console.log(term);

            const filteredResults = data.filter((item) => 
                Object.values(item).some((value) =>
                    value.toString().toLowerCase().includes(term.toLowerCase())
                )
            );
            setFilteredData(filteredResults);
        };

        

  











  return (
    <div>
        <div className="container mt-5">
            <h2 className='text-center'> Search Data from Table using React JS </h2>
            <hr />

            <h3> Search Products : </h3>
            <hr />

            <div className="search-box">
                <input type="text"placeholder='Search Products' value={searchTerm} onChange={handleSearch} />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button> 
            </div>

            <br />

            <table cellPadding={"5px"}>
                <thead>
                    <tr>
                        <th> #ID </th>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Category </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((row) => (
                            <tr key={row.id}>
                                <td> {row.id} </td>
                                <td> {row.name} </td>
                                <td> {row.price} </td>
                                <td> {row.category} </td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-primary">
                                            <i className="fa-solid fa-eye"></i> &nbsp;
                                            Read
                                        </button> 
                                        <button className="btn btn-info">
                                            <i className="fa-solid fa-pen-to-square"></i> &nbsp;
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-x"></i> &nbsp;
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}


export default Search_Data_from_Table